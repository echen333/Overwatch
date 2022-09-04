import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import React, { useEffect } from 'react';
import MarkerClusterGroup from "react-leaflet-markercluster";

import "../styles.scss";

export default function Demo() {

    return (
        <div>
            <h2> Hi</h2>
            <MapContainer
            className="markercluster-map"
            center={[51.0, 19.0]}
            zoom={4}
            maxZoom={18}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                    <Marker position={[49.8397, 24.0297]} />
                {/* <MarkerClusterGroup> */}
                    <Marker position={[52.2297, 21.0122]} />
                    {/* <Marker position={[51.5074, -0.0901]} /> */}
                {/* </MarkerClusterGroup> */}
            </MapContainer>
        </div>
    );
  }
  