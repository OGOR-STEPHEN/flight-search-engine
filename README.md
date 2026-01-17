Flight Search & Price Trends App

A modern flight search interface featuring live flight data integration, comprehensive mock data, and advanced filtering options. Designed to showcase real-time price trends, responsive layouts, and a smooth, user-friendly experience.

Project Overview

This project allows users to:

Search for flights across multiple routes (live and mock)

View detailed flight information including airline, stops, price, duration, and departure/arrival times

Explore price trends via a dynamic chart

Filter results by price, number of stops, and airline

Seamlessly switch between live flights (via Amadeus API) and fully populated mock routes for enhanced UI presentation

The app is fully responsive, providing a polished experience across both desktop and mobile devices.

Project Overview

This project allows users to:

Search for flights across multiple routes (live and mock)

View detailed flight information including airline, stops, price, duration, and departure/arrival times

Explore price trends via a dynamic chart

Filter results by price, number of stops, and airline

Seamlessly switch between live flights (via Amadeus API) and fully populated mock routes for enhanced UI presentation

The app is fully responsive, providing a polished experience across both desktop and mobile devices.

Features
1. Dynamic Route Selection

Live route: JFK → LHR (Amadeus API)

Mock routes: LAX → PAR, HND → SFO, DXB → LHR, SIN → SYD

Users can easily switch routes via a dropdown menu

2. Advanced Filtering

Max Price Slider: Filter flights up to a selected price

Stops Filter: Non-stop, 1 stop, or 2+ stops

Airline Filter: Select specific airlines for tailored results

3. Price Trends Visualization

Interactive graph updates in real-time as filters are applied

Visualizes price distribution and trends per selected route

4. Mock Data Integration

Populated mock routes (~15 flights per route) to demonstrate full UI experience

Includes realistic flight times, durations, stops, and pricing

5. Error Handling & Loading States

Graceful feedback for empty results or API errors

Loading indicator during flight fetches

6. Responsive Design

Fully functional on desktop and mobile

Clean, modern UI with attention to usability

Tech Stack

Frontend: React, TypeScript, TailwindCSS

Backend: Node.js, Express

Data: Amadeus Flight Offers API for live data; Mock JSON data for additional routes

Visualization: Recharts (Price Trends Graph)

Icons: Lucide-react

Hosting: Ready for deployment on Vercel, Netlify, or similar platforms

Tech Stack

Frontend: React, TypeScript, TailwindCSS

Backend: Node.js, Express

Data: Amadeus Flight Offers API for live data; Mock JSON data for additional routes

Visualization: Recharts (Price Trends Graph)

Icons: Lucide-react

Hosting: Ready for deployment on Vercel, Netlify, or similar platforms

Getting Started

1. Clone the repository:

# git clone <your-repo-url>
# cd flight-search-app

2. Install dependencies:

# npm install

3. Create a .env file in the root for Amadeus API credentials:

# AMADEUS_API_KEY=your_amadeus_api_key
# AMADEUS_API_SECRET=your_amadeus_api_secret

4. Start the development server:

# npm run dev

5. Open http://localhost:3000 to view in the browser.

Project Structure

src/
├── components/
│   ├── FlightCard.tsx
│   ├── FlightTest.tsx
│   └── PriceGraph.tsx
├── data/
│   └── MockFlights.ts
├── utils/
│   └── normalizeFlights.ts
└── types/
    └── Flight.ts

components/ – All React components, including flight cards, search UI, and price graph

data/ – Mock flight data for additional routes

utils/ – Utility functions for normalizing API responses

types/ – TypeScript type definitions

# Demo

Live demo: [Insert your hosted link here]

Loom walkthrough video: [Insert Loom link here]

# Notes

Mock data ensures a fully populated UI even when live API data is limited

Designed for easy expansion to additional routes or API integrations

Real-time filters provide instant updates for flight results and price graphs

# Author

OGOR STEPHEN – Full-stack developer, specializing in dynamic web applications and responsive, user-friendly interfaces.



