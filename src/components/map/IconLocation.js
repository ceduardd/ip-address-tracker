import L from 'leaflet';

import iconLocation from '../../assets/icon-location.svg';

export const IconLocation = L.icon({
  iconUrl: iconLocation,
  iconRetinaUrl: iconLocation,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [46, 56],
  className: 'leaflet-location-icon',
});
