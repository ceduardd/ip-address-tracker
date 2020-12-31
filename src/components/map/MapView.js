import React from 'react';
import { Map, TileLayer /* ZoomControl */ } from 'react-leaflet';
import MarkerLocation from './MarkerLocation';
import Loader from '../ui/Loader';

import 'leaflet/dist/leaflet.css';

const MapView = ({ loading, coord, location = '' }) => {
  return loading ? (
    <div className="loader">
      <Loader />
    </div>
  ) : (
    <Map center={coord} zoom={13} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerLocation coord={coord} location={location} />
    </Map>
  );
};

export default MapView;
