import React, { useEffect, useState } from 'react';
// import useOnclickOutside from "react-cool-onclickoutside";

import { ChangeEvent } from "react";
import usePlacesAutocomplete,{ getGeocode,getLatLng,}from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";

import "@reach/combobox/styles.css";
import "../css/autocomplete.css";
import axios from 'axios';
import markersStore from '../stores/markers.store';
import mapStore from '../stores/mapStore';

export default function Autocomplete() {

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue
  } = usePlacesAutocomplete();

  const marker={lat:0,lng:0};

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log("handleInput");
    setValue(e.target.value);
    convertfromAdressToLocation();
    mapStore.setCenter(marker.lat, marker.lng);
  };

  const handleSelect = (val: string): void => {
     console.log("handleSelect");
    setValue(val, false);
  };

  const renderSuggestions = (): JSX.Element => {
      console.log("renderSuggestions");
      console.log(data);
    const suggestions = data.map(({ place_id, description }: any) => (
      <ComboboxOption key={place_id} value={description} />
    ));
        console.log(suggestions);
    return (
      <>
        {suggestions}
      </>
    );
  };

//?city=Israel&   -איך מגבילים לחיפוש בישראל
      const convertfromAdressToLocation=()=>{
       getGeocode({ address: value })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log("Coordinates: ", { lat, lng });
        marker.lat=lat;
        marker.lng=lng;
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
      }

  return (
    <div className="container">
      <h1 className="title">search</h1>
      <Combobox onSelect={handleSelect} aria-labelledby="demo">
        <ComboboxInput
          style={{ width: 300, maxWidth: "90%" }}
          value={value}
          onChange={handleInput}
          disabled={!ready}
        />
        <ComboboxPopover>
          <ComboboxList>{status === "OK" && renderSuggestions()}</ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}