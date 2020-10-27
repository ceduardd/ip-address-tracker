import React, { useContext } from 'react';
import { Map, TileLayer /*ZoomControl*/ } from 'react-leaflet';
import MarkerLocation from './MarkerLocation';

import { GlobalContext } from '../context/GlobalState';

import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const { data } = useContext(GlobalContext);

  const { coord, location } = data;

  return (
    <Map center={coord} zoom={13} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <ZoomControl position={'bottomleft'} /> */}
      <MarkerLocation coord={coord} location={location} />
    </Map>
  );
};

export default MapView;
