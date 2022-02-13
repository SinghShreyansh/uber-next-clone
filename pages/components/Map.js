import React from 'react';
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'


mapboxgl.accessToken = 'pk.eyJ1Ijoic2hyZXlhbnNoMDMyMiIsImEiOiJja3prdXd5ZHM0enEzMm9uazFncXFlMjBzIn0.aUHWQ9xpWIQIiv2_j3cueQ';

const Map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [78.96288,20.593684], // starting position
          zoom: 3  // starting zoom
        },[]);
    
        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());
      })

  return (
    
      <div id="map" className="h-[50vh]" ></div>
  );
}

export default Map;
