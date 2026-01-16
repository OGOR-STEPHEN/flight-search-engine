export function normalizeFlights(apiFlights: any[]) {
  return apiFlights.map((flight) => {
    const firstSegment = flight.itineraries[0].segments[0];
    const lastSegment =
      flight.itineraries[0].segments[
        flight.itineraries[0].segments.length - 1
      ];

    return {
      id: flight.id,
      airline: firstSegment.carrierCode,
      origin: firstSegment.departure.iataCode,
      destination: lastSegment.arrival.iataCode,
      departureTime: firstSegment.departure.at,
      arrivalTime: lastSegment.arrival.at,
      stops: flight.itineraries[0].segments.length - 1,
      price: Number(flight.price.total),
      currency: flight.price.currency,
    };
  });
}