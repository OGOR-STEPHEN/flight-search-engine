import { useEffect, useMemo, useState, useCallback } from "react";
import { normalizeFlights } from "../utils/normalizeFlights";
import FlightCard from "./FlightCard";
import PriceGraph from "./PriceGraph";
import { Plane, DollarSign, ListChecks, Route } from "lucide-react";
import { MOCK_FLIGHTS } from "../data/MockFlights";

/* ================= TYPES ================= */

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

type RouteOption = {
  label: string;
  origin: string;
  destination: string;
  type: "live" | "mock";
};

/* ================= COMPONENT ================= */

export default function FlightTest() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ================= ROUTES ================= */

  const routes: RouteOption[] = [
    { label: "NYC → London (Live)", origin: "JFK", destination: "LHR", type: "live" },
    { label: "LAX → Paris (Mock)", origin: "LAX", destination: "PAR", type: "mock" },
    { label: "HND → San Francisco (Mock)", origin: "HND", destination: "SFO", type: "mock" },
    { label: "DXB → London (Mock)", origin: "DXB", destination: "LHR", type: "mock" },
    { label: "SIN → Sydney (Mock)", origin: "SIN", destination: "SYD", type: "mock" },
  ];

  const [selectedRoute, setSelectedRoute] = useState<RouteOption>(routes[0]);

  /* ================= FILTERS ================= */

  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [selectedStops, setSelectedStops] = useState<number[]>([]);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);

  /* ================= FETCH LOGIC ================= */

  const fetchFlights = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // MOCK ROUTES
      if (selectedRoute.type === "mock") {
        const mockData = MOCK_FLIGHTS[`${selectedRoute.origin}-${selectedRoute.destination}`] || [];
        setFlights(mockData);
      } else {
        // LIVE ROUTE
        const url = `http://localhost:3000/api/search?origin=${selectedRoute.origin}&destination=${selectedRoute.destination}&date=2026-02-01`;
        const res = await fetch(url);

        if (!res.ok) throw new Error("Failed to fetch live flight data");

        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Unexpected API response");

        setFlights(normalizeFlights(data));
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to load flights");
      setFlights([]);
    } finally {
      setLoading(false);
      setMaxPrice(null);
      setSelectedStops([]);
      setSelectedAirlines([]);
    }
  }, [selectedRoute]);

  useEffect(() => {
    fetchFlights();
  }, [fetchFlights]);

  /* ================= FILTERING ================= */

  const filteredFlights = useMemo(() => {
    return flights.filter((flight) => {
      if (maxPrice !== null && flight.price > maxPrice) return false;
      if (selectedStops.length && !selectedStops.includes(flight.stops)) return false;
      if (selectedAirlines.length && !selectedAirlines.includes(flight.airline)) return false;
      return true;
    });
  }, [flights, maxPrice, selectedStops, selectedAirlines]);

  const airlines = useMemo(() => [...new Set(flights.map((f) => f.airline))], [flights]);

  /* ================= UI ================= */

  if (loading)
    return <p className="text-center mt-16 text-blue-600 font-medium">Searching flights…</p>;

  if (error)
    return <p className="text-center mt-16 text-red-500 font-medium">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      {/* ================= ROUTE SELECT ================= */}
      <section className="bg-white border rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Route size={20} className="text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-800">Select Route</h2>
        </div>
        <select
          value={selectedRoute.label}
          onChange={(e) =>
            setSelectedRoute(routes.find((r) => r.label === e.target.value)!)
          }
          className="w-full md:w-1/2 border rounded-lg px-4 py-2"
        >
          {routes.map((route) => (
            <option key={route.label} value={route.label}>
              {route.label}
            </option>
          ))}
        </select>
      </section>

      {/* ================= PRICE GRAPH ================= */}
      <section className="bg-white rounded-xl p-5 shadow-sm border">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Price trends for {selectedRoute.origin} → {selectedRoute.destination}
        </h2>
        <PriceGraph flights={filteredFlights} />
      </section>

      {/* ================= FILTERS ================= */}
      <section className="bg-white rounded-xl border shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Refine results</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* PRICE */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={18} />
              <span className="font-medium text-sm">Max Price</span>
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
              Up to <strong>${maxPrice ?? "Any"}</strong>
            </div>
          </div>

          {/* STOPS */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Plane size={18} />
              <span className="font-medium text-sm">Stops</span>
            </div>
            <div className="flex gap-2">
              {[0, 1, 2].map((stop) => (
                <button
                  key={stop}
                  onClick={() =>
                    setSelectedStops((prev) =>
                      prev.includes(stop)
                        ? prev.filter((s) => s !== stop)
                        : [...prev, stop]
                    )
                  }
                  className={`px-4 py-2 rounded-full text-sm border ${
                    selectedStops.includes(stop)
                      ? "bg-blue-600 text-white"
                      : "bg-white"
                  }`}
                >
                  {stop === 0 ? "Non-stop" : stop === 1 ? "1 stop" : "2+ stops"}
                </button>
              ))}
            </div>
          </div>

          {/* AIRLINES */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ListChecks size={18} />
              <span className="font-medium text-sm">Airlines</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {airlines.map((airline) => (
                <button
                  key={airline}
                  onClick={() =>
                    setSelectedAirlines((prev) =>
                      prev.includes(airline)
                        ? prev.filter((a) => a !== airline)
                        : [...prev, airline]
                    )
                  }
                  className={`px-4 py-2 rounded-full text-sm border ${
                    selectedAirlines.includes(airline)
                      ? "bg-blue-600 text-white"
                      : "bg-white"
                  }`}
                >
                  {airline}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="space-y-4">
        {filteredFlights.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No flights match your filters</p>
        )}
        {filteredFlights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </section>
    </div>
  );
}
