import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

const Location = (props) => {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{lat:25.4356641,lng:-100.9854943}}/>
    )
}

export default withScriptjs(
    withGoogleMap(
        Location
    )
)
