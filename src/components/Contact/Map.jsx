import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Map extends Component {
    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };

    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '80vh', width: '100%' }} className='Map'>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'Api Google Maps Key'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            markers = {[
                {
                    lat: 56.130366, lng: -106.346771
                },
                {
                    lat: -15.7797200, lng: -47.9297200     
                }
            ]}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
  
  export default Map;