import { useEffect, useState } from "react";
import { normalizeFlights } from "../utils/normalizeFlights";
import FlightCard from "./FlightCard";
import { Plane, DollarSign, ListChecks } from "lucide-react"; // professional icons

type Flight = {
  id: string;
  origin: string;
  destination: string;
  airline: string;
  stops: number;
  price: number;
  currency: string;
  departureTime: string;
  arrivalTime: string;
};

export default function FlightTest() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // FILTER STATES
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [selectedStops, setSelectedStops] = useState<number[]>([]);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);

  // FILTERED FLIGHTS
  const filteredFlights = flights.filter((flight) => {
    if (maxPrice !== null && flight.price > maxPrice) return false;
    if (selectedStops.length > 0 && !selectedStops.includes(flight.stops)) return false;
    if (selectedAirlines.length > 0 && !selectedAirlines.includes(flight.airline)) return false;
    return true;
  });

  // FETCH FLIGHTS
  useEffect(() => {
    async function fetchFlights() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          "http://localhost:3000/api/search?origin=JFK&destination=LHR&date=2026-02-01"
        );

        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        const normalized = normalizeFlights(data);

        setFlights(normalized);
      } catch (err: any) {
        setError(err.message ?? "Something went wrong");
        console.error("Flight search error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchFlights();
  }, []);

  // RENDER STATES
  if (loading)
    return <p className="text-center mt-10 text-blue-600 font-medium">Searching flights...</p>;

  if (error)
    return <p className="text-center mt-10 text-red-500 font-medium">Error: {error}</p>;

  if (!flights.length)
    return <p className="text-center mt-10 text-gray-500 font-medium">No flights found</p>;

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* ===================== FILTERS ===================== */}
      <div className="flex flex-wrap gap-4 mb-6 items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        {/* Price Filter */}
        <div className="flex items-center gap-2">
          <DollarSign size={20} />
          <label className="font-medium">Max Price:</label>
          <input
            type="number"
            placeholder="Any"
            className="border rounded px-2 py-1 w-24"
            value={maxPrice ?? ""}
            onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : null)}
          />
        </div>

        {/* Stops Filter */}
        <div className="flex items-center gap-2">
          <Plane size={18} strokeWidth={1.5} />
          <label className="font-medium">Stops:</label>
          {[0, 1, 2].map((stop) => (
            <label key={stop} className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={selectedStops.includes(stop)}
                onChange={() => {
                  if (selectedStops.includes(stop)) {
                    setSelectedStops(selectedStops.filter((s) => s !== stop));
                  } else {
                    setSelectedStops([...selectedStops, stop]);
                  }
                }}
              />
              {stop === 2 ? "2+" : stop}
            </label>
          ))}
        </div>

        {/* Airlines Filter */}
        <div className="flex items-center gap-2">
          <ListChecks size={20} />
          <label className="font-medium">Airlines:</label>
          <select
            multiple
            className="border rounded px-2 py-1"
            value={selectedAirlines}
            onChange={(e) =>
              setSelectedAirlines(Array.from(e.target.selectedOptions, (opt) => opt.value))
            }
          >
            {[...new Set(flights.map((f) => f.airline))].map((airline) => (
              <option key={airline} value={airline}>
                {airline}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ===================== FLIGHT LIST ===================== */}
      <div className="grid gap-4">
        {filteredFlights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
}