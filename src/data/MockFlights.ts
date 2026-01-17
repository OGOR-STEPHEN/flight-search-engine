// src/data/MockFlights.ts
// import type { Flight } from "../types/Flight";

export const MOCK_FLIGHTS: Record<string, Flight[]> = {
  "LAX-PAR": [
    { id: "lax-par-1", origin: "LAX", destination: "PAR", airline: "Air France", stops: 1, price: 720, currency: "USD", duration: "12h 40m", departureTime: "09:20", arrivalTime: "07:00" },
    { id: "lax-par-2", origin: "LAX", destination: "PAR", airline: "Delta", stops: 0, price: 880, currency: "USD", duration: "10h 55m", departureTime: "16:10", arrivalTime: "11:05" },
    { id: "lax-par-3", origin: "LAX", destination: "PAR", airline: "United", stops: 2, price: 640, currency: "USD", duration: "14h 20m", departureTime: "07:45", arrivalTime: "09:30" },
    { id: "lax-par-4", origin: "LAX", destination: "PAR", airline: "British Airways", stops: 1, price: 750, currency: "USD", duration: "11h 50m", departureTime: "12:00", arrivalTime: "06:50" },
    { id: "lax-par-5", origin: "LAX", destination: "PAR", airline: "Lufthansa", stops: 1, price: 780, currency: "USD", duration: "12h 15m", departureTime: "13:00", arrivalTime: "09:15" },
    { id: "lax-par-6", origin: "LAX", destination: "PAR", airline: "Air France", stops: 0, price: 900, currency: "USD", duration: "10h 50m", departureTime: "18:30", arrivalTime: "13:20" },
    { id: "lax-par-7", origin: "LAX", destination: "PAR", airline: "Delta", stops: 2, price: 620, currency: "USD", duration: "14h 00m", departureTime: "06:20", arrivalTime: "08:20" },
    { id: "lax-par-8", origin: "LAX", destination: "PAR", airline: "United", stops: 1, price: 700, currency: "USD", duration: "11h 45m", departureTime: "15:10", arrivalTime: "07:55" },
    { id: "lax-par-9", origin: "LAX", destination: "PAR", airline: "British Airways", stops: 0, price: 840, currency: "USD", duration: "10h 30m", departureTime: "08:40", arrivalTime: "05:10" },
    { id: "lax-par-10", origin: "LAX", destination: "PAR", airline: "Lufthansa", stops: 1, price: 770, currency: "USD", duration: "12h 10m", departureTime: "11:30", arrivalTime: "07:40" },
    { id: "lax-par-11", origin: "LAX", destination: "PAR", airline: "Air France", stops: 1, price: 730, currency: "USD", duration: "12h 35m", departureTime: "09:50", arrivalTime: "07:25" },
    { id: "lax-par-12", origin: "LAX", destination: "PAR", airline: "Delta", stops: 0, price: 890, currency: "USD", duration: "11h 05m", departureTime: "17:20", arrivalTime: "12:25" },
    { id: "lax-par-13", origin: "LAX", destination: "PAR", airline: "United", stops: 2, price: 650, currency: "USD", duration: "14h 15m", departureTime: "07:55", arrivalTime: "09:50" },
    { id: "lax-par-14", origin: "LAX", destination: "PAR", airline: "British Airways", stops: 1, price: 760, currency: "USD", duration: "12h 00m", departureTime: "13:40", arrivalTime: "07:40" },
    { id: "lax-par-15", origin: "LAX", destination: "PAR", airline: "Lufthansa", stops: 0, price: 880, currency: "USD", duration: "10h 45m", departureTime: "19:00", arrivalTime: "14:45" },
  ],

  "HND-SFO": [
    { id: "hnd-sfo-1", origin: "HND", destination: "SFO", airline: "ANA", stops: 0, price: 910, currency: "USD", duration: "9h 35m", departureTime: "10:40", arrivalTime: "03:15" },
    { id: "hnd-sfo-2", origin: "HND", destination: "SFO", airline: "Japan Airlines", stops: 1, price: 840, currency: "USD", duration: "11h 50m", departureTime: "14:20", arrivalTime: "06:10" },
    { id: "hnd-sfo-3", origin: "HND", destination: "SFO", airline: "United", stops: 0, price: 960, currency: "USD", duration: "9h 45m", departureTime: "17:30", arrivalTime: "10:15" },
    { id: "hnd-sfo-4", origin: "HND", destination: "SFO", airline: "ANA", stops: 1, price: 870, currency: "USD", duration: "12h 05m", departureTime: "21:00", arrivalTime: "09:05" },
    { id: "hnd-sfo-5", origin: "HND", destination: "SFO", airline: "Japan Airlines", stops: 0, price: 930, currency: "USD", duration: "9h 50m", departureTime: "08:15", arrivalTime: "02:05" },
    { id: "hnd-sfo-6", origin: "HND", destination: "SFO", airline: "United", stops: 1, price: 850, currency: "USD", duration: "11h 30m", departureTime: "12:45", arrivalTime: "04:15" },
    { id: "hnd-sfo-7", origin: "HND", destination: "SFO", airline: "ANA", stops: 0, price: 920, currency: "USD", duration: "9h 40m", departureTime: "16:00", arrivalTime: "08:40" },
    { id: "hnd-sfo-8", origin: "HND", destination: "SFO", airline: "Japan Airlines", stops: 1, price: 860, currency: "USD", duration: "12h 15m", departureTime: "19:30", arrivalTime: "07:45" },
    { id: "hnd-sfo-9", origin: "HND", destination: "SFO", airline: "United", stops: 0, price: 970, currency: "USD", duration: "9h 55m", departureTime: "07:00", arrivalTime: "01:55" },
    { id: "hnd-sfo-10", origin: "HND", destination: "SFO", airline: "ANA", stops: 1, price: 880, currency: "USD", duration: "11h 45m", departureTime: "11:20", arrivalTime: "03:05" },
    { id: "hnd-sfo-11", origin: "HND", destination: "SFO", airline: "Japan Airlines", stops: 0, price: 940, currency: "USD", duration: "9h 30m", departureTime: "15:40", arrivalTime: "06:10" },
    { id: "hnd-sfo-12", origin: "HND", destination: "SFO", airline: "United", stops: 1, price: 830, currency: "USD", duration: "12h 00m", departureTime: "20:10", arrivalTime: "08:10" },
    // add more variations until ~12–15 flights
  ],

  "DXB-LHR": [
    { id: "dxb-lhr-1", origin: "DXB", destination: "LHR", airline: "Emirates", stops: 0, price: 880, currency: "USD", duration: "7h 20m", departureTime: "08:15", arrivalTime: "12:35" },
    { id: "dxb-lhr-2", origin: "DXB", destination: "LHR", airline: "British Airways", stops: 0, price: 920, currency: "USD", duration: "7h 45m", departureTime: "02:40", arrivalTime: "07:25" },
    { id: "dxb-lhr-3", origin: "DXB", destination: "LHR", airline: "Qatar Airways", stops: 1, price: 790, currency: "USD", duration: "10h 10m", departureTime: "22:00", arrivalTime: "07:10" },
    { id: "dxb-lhr-4", origin: "DXB", destination: "LHR", airline: "Emirates", stops: 0, price: 890, currency: "USD", duration: "7h 30m", departureTime: "14:30", arrivalTime: "19:00" },
    { id: "dxb-lhr-5", origin: "DXB", destination: "LHR", airline: "British Airways", stops: 1, price: 810, currency: "USD", duration: "9h 50m", departureTime: "18:20", arrivalTime: "04:10" },
    { id: "dxb-lhr-6", origin: "DXB", destination: "LHR", airline: "Qatar Airways", stops: 0, price: 930, currency: "USD", duration: "7h 40m", departureTime: "06:50", arrivalTime: "12:30" },
    { id: "dxb-lhr-7", origin: "DXB", destination: "LHR", airline: "Emirates", stops: 1, price: 800, currency: "USD", duration: "10h 00m", departureTime: "11:15", arrivalTime: "21:15" },
    { id: "dxb-lhr-8", origin: "DXB", destination: "LHR", airline: "British Airways", stops: 0, price: 910, currency: "USD", duration: "7h 35m", departureTime: "03:30", arrivalTime: "11:05" },
    { id: "dxb-lhr-9", origin: "DXB", destination: "LHR", airline: "Qatar Airways", stops: 1, price: 780, currency: "USD", duration: "10h 20m", departureTime: "20:45", arrivalTime: "06:05" },
    { id: "dxb-lhr-10", origin: "DXB", destination: "LHR", airline: "Emirates", stops: 0, price: 900, currency: "USD", duration: "7h 25m", departureTime: "12:10", arrivalTime: "19:35" },
    { id: "dxb-lhr-11", origin: "DXB", destination: "LHR", airline: "British Airways", stops: 1, price: 820, currency: "USD", duration: "9h 45m", departureTime: "16:00", arrivalTime: "02:45" },
    { id: "dxb-lhr-12", origin: "DXB", destination: "LHR", airline: "Qatar Airways", stops: 0, price: 940, currency: "USD", duration: "7h 50m", departureTime: "05:20", arrivalTime: "13:10" },
    // expand to ~12 flights with varied stops, prices, times
  ],

  "SIN-SYD": [
    { id: "sin-syd-1", origin: "SIN", destination: "SYD", airline: "Singapore Airlines", stops: 0, price: 670, currency: "USD", duration: "8h 15m", departureTime: "09:30", arrivalTime: "19:45" },
    { id: "sin-syd-2", origin: "SIN", destination: "SYD", airline: "Qantas", stops: 0, price: 710, currency: "USD", duration: "8h 05m", departureTime: "20:10", arrivalTime: "06:15" },
    { id: "sin-syd-3", origin: "SIN", destination: "SYD", airline: "Jetstar", stops: 1, price: 520, currency: "USD", duration: "10h 30m", departureTime: "06:40", arrivalTime: "19:10" },
    { id: "sin-syd-4", origin: "SIN", destination: "SYD", airline: "Singapore Airlines", stops: 0, price: 680, currency: "USD", duration: "8h 20m", departureTime: "13:15", arrivalTime: "23:35" },
    { id: "sin-syd-5", origin: "SIN", destination: "SYD", airline: "Qantas", stops: 1, price: 540, currency: "USD", duration: "10h 15m", departureTime: "17:50", arrivalTime: "04:05" },
    { id: "sin-syd-6", origin: "SIN", destination: "SYD", airline: "Jetstar", stops: 0, price: 720, currency: "USD", duration: "8h 10m", departureTime: "11:00", arrivalTime: "19:10" },
    { id: "sin-syd-7", origin: "SIN", destination: "SYD", airline: "Singapore Airlines", stops: 1, price: 560, currency: "USD", duration: "10h 25m", departureTime: "15:30", arrivalTime: "02:55" },
    { id: "sin-syd-8", origin: "SIN", destination: "SYD", airline: "Qantas", stops: 0, price: 730, currency: "USD", duration: "8h 00m", departureTime: "22:20", arrivalTime: "06:20" },
    { id: "sin-syd-9", origin: "SIN", destination: "SYD", airline: "Jetstar", stops: 1, price: 530, currency: "USD", duration: "10h 40m", departureTime: "07:55", arrivalTime: "20:35" },
    { id: "sin-syd-10", origin: "SIN", destination: "SYD", airline: "Singapore Airlines", stops: 0, price: 690, currency: "USD", duration: "8h 30m", departureTime: "14:45", arrivalTime: "23:15" },
    { id: "sin-syd-11", origin: "SIN", destination: "SYD", airline: "Qantas", stops: 1, price: 550, currency: "USD", duration: "10h 05m", departureTime: "18:30", arrivalTime: "04:35" },
    { id: "sin-syd-12", origin: "SIN", destination: "SYD", airline: "Jetstar", stops: 0, price: 740, currency: "USD", duration: "8h 15m", departureTime: "10:20", arrivalTime: "18:35" },
    // expand to ~12 flights
  ],
};
