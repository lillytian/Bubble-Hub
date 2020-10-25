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

const libraries = ["places"];
const mapContainerStyle = {
   width: "100vw",
   height: "85.5vh",
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
  
  const panTo = React.useCallback(({ lat, lng }) => {
     mapRef.current.panTo({ lat, lng });
     mapRef.current.setZoom(14);
  }, []);
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";


  return (
   <div>
      <Search panTo={panTo} />
      <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={12} 
            center={center}
            options={options}
            onLoad={onMapLoad}
      ></GoogleMap>
   </div>
  )
}


function Search({ panTo }) {
   const {
      ready, 
      value, 
      suggestions: {status, data}, 
      setValue, 
      clearSuggestions,
   } = usePlacesAutoComplete({
      requestOptions: {
         location: { lat: () => 30.267153, lng: () => -97.743057 },
         radius: 200 * 1000,
      },
   });
   return (
      <div className="search">
         <Combobox 
            onSelect={async (address) => {
               setValue(address, false);
               clearSuggestions();
               try {
                  const results = await getGeocode({address});
                  const { lat, lng } = await getLatLng(results[0]);
                  panTo({ lat, lng });
               } catch(error) {
                  console.log("error!")
               }
         }}
         >
            <ComboboxInput value={value} onChange={(e) => {
               setValue(e.target.value);
            }}
            disabled={!ready}
            placeholder="Enter an address"
            />
            <ComboboxPopover>
               <ComboboxList>
                  {status === "OK" && 
                     data.map(({id, description}) => (
                        <ComboboxOption key={id} value={description }/>
                     ))}
               </ComboboxList>
            </ComboboxPopover>
         </Combobox>
      </div>
   )
}