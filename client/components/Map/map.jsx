import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import MapMarkers from './MapMarkers/MapMarkers';


const position = [37.772802, -122.434828];

const style = {
  width: '75%',
  height: '600px',
};

const map = ({ breweries }) => (
  <Map center={position} zoom={13} style={style}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    {breweries.length > 0 ? <MapMarkers breweries={breweries} /> : null}
  </Map>
);

export default map;
