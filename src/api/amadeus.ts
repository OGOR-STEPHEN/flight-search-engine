import axios from "axios";

const API_KEY = import.meta.env.VITE_AMADEUS_API_KEY;
const API_SECRET = import.meta.env.VITE_AMADEUS_API_SECRET;

let token: string | null = null;

console.log("API_KEY:", API_KEY, "API_SECRET:", API_SECRET);

// Get access token
export async function getAccessToken() {
  if (token) return token;

  const res = await axios.post(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: API_KEY!,
      client_secret: API_SECRET!,
    })
  );

  token = res.data.access_token;
  return token;
}


// Flight search
export async function searchFlights(params: {
  origin: string;
  destination: string;
  date: string;
}) {
  const accessToken = await getAccessToken();

  const res = await axios.get(
    "https://test.api.amadeus.com/v2/shopping/flight-offers",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,

      },
      params: {
        originLocationCode: params.origin,
        destinationLocationCode: params.destination,
        departureDate: params.date,
        adults: 1,
        currencyCode: "USD",
      },
    }
  );

  return res.data.data; // returns raw flight offers
}