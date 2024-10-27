import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const markerIcon = new L.Icon({
  iconUrl: "/icon-location.svg",
  iconSize: [40, 41],
  iconAnchor: [25, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
  shadowSize: [41, 41],
});

interface Props {
  lat: number;
  lng: number;
}

const ChangeMapView = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], 13);
  }, [lat, lng, map]);

  return null; // No necesita renderizar nada
};

const MapComponent = ({ lat, lng }: Props) => {
  return (
    <div className="h-full w-full">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        style={{ height: "100%", width: "100%" }} // Tamaño del mapa
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[lat, lng]} icon={markerIcon}>
          <Popup>
            ¡Hola desde tu ubicación! <br /> Latitud: {lat}, Longitud: {lng}
          </Popup>
        </Marker>
        <ChangeMapView lat={lat} lng={lng} />
      </MapContainer>
    </div>
  );
};
export default MapComponent;
