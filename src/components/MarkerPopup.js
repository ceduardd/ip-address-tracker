import React from 'react';
import { Popup } from 'react-leaflet';

export const MarkerPopup = ({ name }) => {
  return (
    <Popup>
      <div>{name}</div>
    </Popup>
  );
};
