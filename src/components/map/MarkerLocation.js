import React from 'react';
import { Marker } from 'react-leaflet';
import { IconLocation } from './IconLocation';
import { MarkerPopup } from './MarkerPopup';

const MarkerLocation = ({ coord, location }) => {
  return (
    <Marker position={coord} icon={IconLocation}>
      <MarkerPopup name={location} />
    </Marker>
  );
};

export default MarkerLocation;
