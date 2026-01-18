// src/utils/normalizeFlights.ts

function formatDuration(isoDuration: string): string {
  // Example input: PT10H55M, PT8H, PT45M
  const hoursMatch = isoDuration.match(/(\d+)H/);
  const minutesMatch = isoDuration.match(/(\d+)M/);

  const hours = hoursMatch ? Number(hoursMatch[1]) : 0;
  const minutes = minutesMatch ? Number(minutesMatch[1]) : 0;

  if (hours && minutes) return `${hours}h ${minutes}m`;
  if (hours) return `${hours}h`;
  if (minutes) return `${minutes}m`;
  return "—";
}

function formatTime(isoDate: string): string {
  // Example input: 2026-02-01T09:20:00
  return new Date(isoDate).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function normalizeFlights(apiFlights: any[]) {
  return apiFlights.map((flight) => {
    const itinerary = flight.itineraries?.[0];
    const segments = itinerary?.segments ?? [];

    const firstSegment = segments[0];
    const lastSegment = segments[segments.length - 1];

    return {
      id: flight.id,
      airline: firstSegment?.carrierCode ?? "Unknown",
      origin: firstSegment?.departure?.iataCode ?? "",
      destination: lastSegment?.arrival?.iataCode ?? "",
      departureTime: formatTime(firstSegment?.departure?.at),
      arrivalTime: formatTime(lastSegment?.arrival?.at),
      stops: Math.max(segments.length - 1, 0),
      price: Number(flight.price?.total ?? 0),
      currency: flight.price?.currency ?? "USD",
      duration: itinerary?.duration
        ? formatDuration(itinerary.duration)
        : "—",
    };
  });
}