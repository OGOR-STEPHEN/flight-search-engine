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
  duration: string; // HH:MM format
};

interface FlightCardProps {
  flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center p-6 rounded-xl shadow-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-white/10 to-gray-100/10 rounded-xl" />
      </div>

      {/* Left section: airline & route */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 z-10 flex-1">
        {/* Airline logo placeholder */}
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-semibold">
          Logo
        </div>

        {/* Route & connection line */}
        <div className="flex flex-col md:flex-row items-center md:gap-4">
          <p className="font-bold text-lg text-gray-800">
            {flight.origin}
          </p>
          <div className="mx-2 flex items-center">
            <Plane size={20} className="text-blue-500 rotate-90" />
            <div className="h-0.5 w-10 bg-gray-300 mx-1" />
          </div>
          <p className="font-bold text-lg text-gray-800">
            {flight.destination}
          </p>
        </div>

        {/* Times and duration */}
        <div className="flex flex-col text-gray-600 text-sm mt-2 md:mt-0">
          <p>
            <Clock size={14} className="inline mr-1 text-gray-400" />
            {flight.departureTime} → {flight.arrivalTime} ({flight.duration})
          </p>
          <p>
            <Airplay size={14} className="inline mr-1 text-gray-400" />
            {flight.stops === 0 ? "Non-stop" : `${flight.stops} stop(s)`}
          </p>
        </div>
      </div>

      {/* Right section: price & CTA */}
      <div className="flex flex-col items-end mt-4 md:mt-0 z-10">
        <p className="text-xl md:text-2xl font-extrabold text-electricBlue">
          {flight.currency} {flight.price.toLocaleString()}
        </p>
        <button className="mt-3 px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-md">
          Select Flight
        </button>
      </div>
    </div>
  );
}