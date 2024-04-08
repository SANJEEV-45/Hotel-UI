import React, { useEffect, Component } from "react";
import 'google-maps-react'
import PlaceIcon from "@mui/icons-material/Place";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

class MyContainer extends Component {
    state = {
        mapLoaded: false,
    };

    componentDidMount() {
        // Wait for the map to load before setting mapLoaded to true
        this.setState({ mapLoaded: true });
    }
    

    render() {
        const { data } = this.props;
        const { mapLoaded } = this.state;
        const mapStyles = {
            width: "400px",
            height: "250px",
        };
        console.log("Map datas",data);
        return (
            <Map
                
                google={this.props.google}
                zoom={3}
                style={mapStyles}
                initialCenter={{
                    lat: data[0].latitude,
                    lng: data[0].longitude,
                }}
                options={{
                    streetViewControl: false,
                    mapTypeControl: false,
                }}
            >
                {mapLoaded &&
                    data.map((hotel, index) => (
                        <Marker
                            key={index}
                            position={{
                                lat: hotel.latitude,
                                lng: hotel.longitude,
                            }}
                            title={hotel.name}
                            icon={{
                                url: <PlaceIcon />,
                                scaledSize: new window.google.maps.Size(40, 40),
                            }}
                        />
                    ))}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBqPUe5wfWgGNOBrNOJqwCdpcknw0tX3DQ",
})(MyContainer);
