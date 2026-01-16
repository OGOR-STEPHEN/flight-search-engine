import { useEffect, useMemo, useState } from "react";
import { normalizeFlights } from "../utils/normalizeFlights";
import FlightCard from "./FlightCard";
import PriceGraph from "./PriceGraph";
import { Plane, DollarSign, ListChecks } from "lucide-react";

type Flight = {
  id: string;
  origin: string;
  destination: string;
  airline: string;
  stops: number;
  price: number;
  currency: string;
  duration: string;
  departureTime: string;
  arrivalTime: string;
};

export default function FlightTest() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [selectedStops, setSelectedStops] = useState<number[]>([]);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);

  // Fetch flights
  useEffect(() => {
    async function fetchFlights() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          "http://localhost:3000/api/search?origin=JFK&destination=LHR&date=2026-02-01"
        );
        if (!res.ok) throw new Error("Failed to fetch flights");

        const data = await res.json();
        setFlights(normalizeFlights(data));
      } catch (err: any) {
        setError(err.message ?? "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchFlights();
  }, []);

  // Derived data
  const filteredFlights = useMemo(() => {
    return flights.filter((flight) => {
      if (maxPrice !== null && flight.price > maxPrice) return false;
      if (selectedStops.length && !selectedStops.includes(flight.stops)) return false;
      if (selectedAirlines.length && !selectedAirlines.includes(flight.airline)) return false;
      return true;
    });
  }, [flights, maxPrice, selectedStops, selectedAirlines]);

  const airlines = useMemo(
    () => [...new Set(flights.map((f) => f.airline))],
    [flights]
  );

  // States
  if (loading)
    return <p className="text-center mt-16 text-blue-600 font-medium">Searching flights…</p>;

  if (error)
    return <p className="text-center mt-16 text-red-500 font-medium">{error}</p>;

  if (!flights.length)
    return <p className="text-center mt-16 text-gray-500">No flights found</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      {/* ================= INSIGHTS ================= */}
      <section className="bg-white rounded-xl p-5 shadow-sm border">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Price trends for JFK → LHR
        </h2>
        <PriceGraph flights={filteredFlights} />
      </section>

      {/* ================= FILTER PANEL ================= */}
      <section className="bg-white rounded-xl border shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Refine results
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ===== MAX PRICE ===== */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={18} className="text-gray-600" />
              <span className="font-medium text-sm text-gray-700">
                Max Price
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={3000}
              step={50}
              value={maxPrice ?? 3000}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-blue-600"
            />

            <div className="mt-2 text-sm text-gray-600">
              Up to <span className="font-semibold">${maxPrice ?? "Any"}</span>
            </div>
          </div>

          {/* ===== STOPS ===== */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Plane size={18} className="text-gray-600" />
              <span className="font-medium text-sm text-gray-700">
                Stops
              </span>
            </div>

            <div className="flex gap-2">
              {[0, 1, 2].map((stop) => {
                const active = selectedStops.includes(stop);
                return (
                  <button
                    key={stop}
                    onClick={() =>
                      setSelectedStops((prev) =>
                        prev.includes(stop)
                          ? prev.filter((s) => s !== stop)
                          : [...prev, stop]
                      )
                    }
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition
                      ${
                        active
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                      }`}
                  >
                    {stop === 0 ? "Non-stop" : stop === 1 ? "1 stop" : "2+ stops"}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ===== AIRLINES ===== */}

          <div>
            <div className="flex items-center gap-2 mb-3">
              <ListChecks size={18} className="text-gray-600" />
              <span className="font-medium text-sm text-gray-700">
                Airlines
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {airlines.map((airline) => {
                const active = selectedAirlines.includes(airline);

                return (
                  <button
                    key={airline}
                    onClick={() =>
                      setSelectedAirlines((prev) =>
                        prev.includes(airline)
                          ? prev.filter((a) => a !== airline)
                          : [...prev, airline]
                      )
                    }
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition
                      ${
                        active
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                      }`}
                  >
                    {airline}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="space-y-4">
        {filteredFlights.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No flights match your filters
          </p>
        )}

        {filteredFlights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </section>

    </div>
  );
}