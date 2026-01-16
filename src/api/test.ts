import { searchFlights } from "./amadeus";

async function test() {
  const flights = await searchFlights({
    origin: "JFK",
    destination: "LHR",
    date: "2026-02-01",
  });

  console.log(flights);
}

test();