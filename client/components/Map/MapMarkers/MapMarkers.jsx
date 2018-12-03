import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const MapMarkers = ({ breweries }) => {
  const markers = breweries.map((brewery) => {
    if (brewery.latitude && brewery.longitude) {
      return (
        <Marker key={brewery.id} position={[Number.parseFloat(brewery.latitude), Number.parseFloat(brewery.longitude)]}>
          <Popup>
            {brewery.name}
          </Popup>
        </Marker>
      );
    }
  });
  return (markers);
};

export default MapMarkers;
