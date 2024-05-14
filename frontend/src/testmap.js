import React from "react";
import Map from 'components/GoogleMapAPI/GoogleMap'

function TestMap() {
    const key = 'yourKey'
    return (
        <div>
        <h1>map</h1>
        <Map 
            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          </div>
    )
}

export default TestMap