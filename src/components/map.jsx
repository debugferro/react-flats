import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './map_marker';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.885707,
      lng: 2.343543
    },
    zoom: 12
  }

  render() {
    const { center, zoom, lat, lng } = this.props;
    return (
      <div className="map-container">
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <MapMarker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
