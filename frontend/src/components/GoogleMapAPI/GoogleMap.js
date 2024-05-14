import React from "react";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";

const Map = () => {
    return (
        <div>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{lat: 21.036947767504476, lng: 105.78228439206812}}
                >
                
            </GoogleMap>
        </div>
    )
}

export default withScriptjs(withGoogleMap(Map))