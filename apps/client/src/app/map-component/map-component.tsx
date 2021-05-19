import React, { useRef, useEffect, useState, useContext } from 'react';
// @ts-ignore;
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import css from './map-component.module.scss';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWJkdWwtamF3d2FkIiwiYSI6ImNrbnhncDBkdjBsbXYydm52c3pydXAwb3oifQ.UJWZ9Ect3PF9skoTdOuExg';
/* eslint-disable-next-line */
export interface MapComponentProps {
  latitude: number;
  longitude: number;
}

function MapComponent({ latitude, longitude }: MapComponentProps) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 15
    });
  }, []);

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // }, [latitude, longitude]);

  return (
    <div>
      <div ref={mapContainer} className={css['map-container']} />
    </div>
  );
}

export default MapComponent;
