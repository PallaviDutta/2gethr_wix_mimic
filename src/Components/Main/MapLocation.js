import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends React.Component {
    state = { userLocation: { lat: 32, lng: 32 }, loading: true };

    componentDidMount(props) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;

                this.setState({
                    userLocation: { lat: latitude, lng: longitude },
                    loading: false,

                });
            },
            () => {
                this.setState({ loading: false });
            }
        );
    }

    render() {
        const { loading, userLocation } = this.state;
        const { google } = this.props;

        if (loading) {
            return null;
        }

        return  <Map
                    google={google}
                    initialCenter={userLocation}
                    zoom={10}
                    
                    style={{
                        width: '60%',
                        height: '50%',
                        marginLeft:'20%'
                    }}
                />
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBuNkJ06gr8RS4w5nms5wGRWMaNUCO1Wo0"
})(MapContainer);