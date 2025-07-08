// components/GymMap.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";
import { gymLocations } from "../../data/gymLocations";

// Fix Leaflet default icon path issues in Next.js
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});




const continents = ["All Locations", "South America", "Europe", "Asia", "North America", "Africa","Australia"];

export default function InteractiveMap() {
  const [continent, setContinent] = useState("All Locations");

  const filtered =
    continent === "All Locations" ? gymLocations : gymLocations.filter((g) => g.continent === continent);

  return (
    <div className="flex flex-col gap-4">
      <select
        className="p-2 border rounded bg-white text-black w-fit m-auto"
        value={continent}
        onChange={(e) => setContinent(e.target.value)}
      >
        {continents.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <MapContainer
        center={[40, 40]}
        zoom={2.5}
        scrollWheelZoom={true}
        style={{ height: 500, width: "100%" }}
        minZoom={2}
        maxZoom={20}
        maxBounds={[
          [-85, -180],
          [85, 180],
        ]}
        maxBoundsViscosity={1.0} 
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filtered.map((gym) => (
          <Marker key={gym.id} position={[gym.lat, gym.lon]}>
            <Popup>{gym.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
