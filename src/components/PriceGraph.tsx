import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Flight = {
  id: string;
  price: number;
  airline: string;
};

interface PriceGraphProps {
  flights: Flight[];
}

export default function PriceGraph({ flights }: PriceGraphProps) {
  const data = flights.map((flight, index) => ({
    label: flight.airline || `Option ${index + 1}`,
    price: flight.price,
  }));

  if (!data.length) {
    return (
      <p className="text-center text-gray-400 mt-6">
        No price data available for current filters
      </p>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Price Comparison
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />

          <XAxis
            dataKey="label"
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />

          <YAxis
            tick={{ fill: "#6b7280", fontSize: 12 }}
            tickFormatter={(value) => `$${value}`}
          />

          <Tooltip
            formatter={(value: number) => [`$${value.toLocaleString()}`, "Price"]}
            labelStyle={{ color: "#374151" }}
          />

          <Line
            type="monotone"
            dataKey="price"
            stroke="#0ff"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}