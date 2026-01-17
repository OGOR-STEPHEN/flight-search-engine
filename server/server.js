import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let token = null;
let tokenExpiry = 0;

async function getToken() {
  console.log("Amadeus Key Loaded:", !!process.env.AMADEUS_API_KEY);
  const now = Date.now();

  if (token && now < tokenExpiry) {
    return token;
  }

  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.AMADEUS_API_KEY,
        client_secret: process.env.AMADEUS_API_SECRET,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    token = response.data.access_token;
    tokenExpiry = now + response.data.expires_in * 1000;

    return token;
  } catch (error) {
    console.error("Amadeus token error:", error.response?.data || error.message);
    throw new Error("Failed to authenticate with Amadeus");
  }
}

app.get("/api/search", async (req, res) => {
  try {
    const { origin, destination, date } = req.query;

    if (!origin || !destination || !date) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const accessToken = await getToken();

    const response = await axios.get(
      "https://test.api.amadeus.com/v2/shopping/flight-offers",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          originLocationCode: origin,
          destinationLocationCode: destination,
          departureDate: date,
          adults: 1,
          currencyCode: "USD",
        },
      }
    );

    res.json(response.data.data || []);
  } catch (error) {
    console.error(
      "Flight search error:",
      error.response?.data || error.message
    );

    res.status(500).json({
      error: "Failed to fetch flight offers",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});