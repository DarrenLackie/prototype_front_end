import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View } from 'react-native';
import styles from './styles';
import Geojson from 'react-native-maps';

const alcatraz = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Point',
                coordinates: [-122.42305755615234, 37.82687023785448],
            }
        }
    ]
};


const MapComponent = () => {
    return (
        <View style={styles.container}>
            <MapView>
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                <Geojson geojson={alcatraz} />
            {/* // region={{ */}
            {/* //     latitude: 55.9533,
            //     longitude: -3.1883,
            //     latitudeDelta: 0.0922,
            //     longitudeDelta: 0.0421, */}
            {/* // }} */}
            </MapView>
        </View>
    );
};

export default MapComponent;
