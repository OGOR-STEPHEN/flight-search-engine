import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let token = null;
let tokenExpiry = null;

async function getToken() {
  const now = Date.now();

  if (token && tokenExpiry && now < tokenExpiry) {
    return token;
  }

  const res = await axios.post(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.VITE_AMADEUS_API_KEY,
      client_secret: process.env.VITE_AMADEUS_API_SECRET,
    })
  );

  token = res.data.access_token;
  tokenExpiry = now + res.data.expires_in * 1000;

  return token;
}

app.get("/api/search", async (req, res) => {
  try {
    const { origin, destination, date } = req.query;
    const accessToken = await getToken();

    const response = await axios.get(
      "https://test.api.amadeus.com/v2/shopping/flight-offers",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: {
          originLocationCode: origin,
          destinationLocationCode: destination,
          departureDate: date,
          adults: 1,
          currencyCode: "USD",
        },
      }
    );

    res.json(response.data.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));