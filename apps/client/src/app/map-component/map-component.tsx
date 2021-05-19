import React, { useRef, useEffect, useState, useContext } from 'react';
// @ts-ignore;
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import css from './map-component.module.scss';
import { ActivitiesContext } from '../activity-context/activity-context';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWJkdWwtamF3d2FkIiwiYSI6ImNrbnhncDBkdjBsbXYydm52c3pydXAwb3oifQ.UJWZ9Ect3PF9skoTdOuExg';
/* eslint-disable-next-line */
export interface MapComponentProps {}

function MapComponent(props: MapComponentProps) {
  const {
    latitudeHandler,
    longitudeHandler,
    zoomHandler,
    latitude,
    longitude,
    zooom
  } = useContext(ActivitiesContext) || {};
  const mapContainer = useRef(null);
  const map = useRef(null);
  // const [lng, setLng] = useState(-70.9);
  // const [lat, setLat] = useState(42.35);
  // const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zooom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      longitudeHandler(map.current.getCenter().lng.toFixed(4));
      latitudeHandler(map.current.getCenter().lat.toFixed(4));
      zoomHandler(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div ref={mapContainer} className={css['map-container']} />
    </div>
  );
}

export default MapComponent;
