import React from "react";
import {
   GoogleMap,
   useLoadScript,
   InfoWindow,
} from "@react-google-maps/api";
//import { formatRelative } from "date-fns";
const libraries = ["places"];
const mapContainerStyle = {
   width: "99vw",
   height: "95vh",
};

const center = {
   lat: 30.267153,
   lng: -97.743057,
}

const options = {
   disableDefaultUI: true,
   zoomControl: true,
};
export default function Map() {
   const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return <div>
     <GoogleMap 
         mapContainerStyle={mapContainerStyle} 
         zoom={12} 
         center={center}
         options={options}
     ></GoogleMap>
  </div>
}