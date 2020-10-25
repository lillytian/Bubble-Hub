import React from "react";
import {
   GoogleMap,
   useLoadScript,
   InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutoComplete, {
   getGeocode,
   getLatLng,
} from "use-places-autocomplete";
import {
   Combobox,
   ComboboxInput,
   ComboboxPopover,
   ComboboxList,
   ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
//import { formatRelative } from "date-fns";
const libraries = ["places"];
const mapContainerStyle = {
   width: "100vw",
   height: "89vh",
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
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
     mapRef.current = map;
  }, []);
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