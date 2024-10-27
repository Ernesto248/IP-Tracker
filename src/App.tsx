//API KEY:at_ZpaX35YkP6obvnViaC51uGHm2b9UA

import { useEffect, useState } from "react";
import Card from "./components/Card";
import MapComponent from "./components/MapComponent";
import SearchBar from "./components/SearchBar";

interface Data {
  ip: string;
  location: {
    country: string;
    region: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  domains: Array<string>;
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}

function App() {
  const [info, setInfo] = useState<Data>();

  const getInitialData = async () => {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_ZpaX35YkP6obvnViaC51uGHm2b9UA`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Cant get the response");
      }
      const data: Data = await response.json();
      setInfo(data);
      console.log(data);
    } catch {
      console.error("Error fetching the data");
    }
  };

  const getData = async (query: string) => {
    try {
      // Determina si el parámetro es una IP o un dominio
      const isDomain = !/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(query); // Verifica si el query no es una IP

      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_ZpaX35YkP6obvnViaC51uGHm2b9UA&${
          isDomain ? `domain=${query}` : `ipAddress=${query}`
        }`
      );

      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }

      const data: Data = await response.json();
      setInfo(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching the data:", error);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const handleSubmit = (query: string) => {
    getData(query);
  };

  return (
    <>
      <div className="min-h-screen w-full relative">
        <div className="w-full h-60 bg-[url('/pattern-bg-desktop.png')]">
          <div className="absolute flex flex-col justify-center items-center w-full">
            <h1 className="mt-5 text-2xl font-bold text-white">
              IP Address Tracker
            </h1>
            <div className="w-72 sm:w-96 h-10 transform translate-y-9">
              <SearchBar onSubmit={handleSubmit} />
            </div>
            <div className="w-72 sm:w-4/5 transform translate-y-20 z-20 relative">
              <Card
                ipAddress={info?.ip}
                location={info?.location.region}
                timeZone={info?.location.timezone}
                isp={info?.isp}
              />
            </div>
          </div>
        </div>
        <div className="z-10 flex-grow h-screen w-full relative">
          {info && info?.location.lng ? (
            <MapComponent lat={info.location.lat} lng={info.location.lng} />
          ) : (
            <p>Cargando mapa...</p> // o cualquier componente de carga
          )}
        </div>
      </div>
    </>
  );
}

export default App;
