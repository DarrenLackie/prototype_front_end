import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './components/Map/styles';
import Zone1 from './components/Zones/Zone1/Zone1'
import Zone1A from './components/Zones/Zone1A/Zone1A'
import Zone2 from './components/Zones/Zone2/Zone2';
import Zone3 from './components/Zones/Zone3/Zone3';
import Zone4 from './components/Zones/Zone4/Zone4';
import Zone5 from './components/Zones/Zone5/Zone5';
import Zone5A from './components/Zones/Zone5A/Zone5A';
import Zone6 from './components/Zones/Zone6/Zone6';
import Zone7 from './components/Zones/Zone7/Zone7';
import Zone8 from './components/Zones/Zone8/Zone8';
import SearchScreen from './components/SearchScreen/SearchScreen'


const Tab = createBottomTabNavigator();

function MapScreen() {
return (
    <View style={{ flex: 1 }}>
    <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
        latitude: 55.9533,
        longitude: -3.1883,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
    >
    <Zone1 />
    <Zone1A />
    <Zone2 />
    <Zone3 />
    <Zone4 />
    <Zone5 />
    <Zone5A />
    <Zone6 />
    <Zone7 />
    <Zone8 />
    </MapView>
    </View>
);
}

function SettingsScreen() {
return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings Screen</Text>
    </View>
);
}

export default function App() {
return (
    <NavigationContainer>
    <View style={{ flex: 1 }}>
        <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    </View>
    </NavigationContainer>
);
}
