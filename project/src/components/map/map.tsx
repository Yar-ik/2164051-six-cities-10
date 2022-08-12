import React, { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from './../../hooks/useMap';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { Point } from '../../types';

const CITY = {
  lat: 52.370216,
  lng: 4.895168,
  zoom: 10,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type Props = {
  points: Point[];
  selectedPoint: Point | undefined;
};

const Map = ({ points, selectedPoint }: Props): JSX.Element => {
  const mapRef = useRef(null);

  const map = useMap(mapRef, CITY);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.latitude,
              lng: point.longitude,
            },
            {
              icon:
                point.title === selectedPoint?.title
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
};
export default Map;
