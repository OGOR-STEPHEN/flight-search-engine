import { Plane, Clock, Airplay } from "lucide-react";

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

interface FlightCardProps {
  flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300 bg-white">
      {/* Left section: route & times */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 flex-1">
        {/* Route */}
        <div className="flex items-center gap-2">
          <Plane className="text-blue-500" size={20} />
          <p className="font-semibold text-gray-800">
            {flight.origin} → {flight.destination}
          </p>
        </div>

        {/* Departure / Arrival times */}
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-gray-400" />
          <p className="text-sm text-gray-600">
            {flight.departureTime} - {flight.arrivalTime}
          </p>
        </div>

        {/* Stops */}
        <div className="flex items-center gap-2">
          <Airplay size={18} className="text-gray-400" />
          <p className="text-sm text-gray-600">
            {flight.stops === 0 ? "Non-stop" : `${flight.stops} stop(s)`}
          </p>
        </div>
      </div>

      {/* Right section: airline & price */}
      <div className="flex flex-col items-end mt-4 md:mt-0">
        <p className="text-sm text-gray-500">{flight.airline}</p>
        <p className="text-lg md:text-xl font-bold text-blue-600 mt-1">
          {flight.currency} {flight.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}