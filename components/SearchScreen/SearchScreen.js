import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';



export default function SearchScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search Screen</Text>
        <Text>Search Bar Here</Text>
        <Text>Filters</Text>
        <Text>Car</Text>
        <Text>Bicycle</Text>
        <TextInput style={styles.input}/>
        </View>
    );
    }

    const styles = StyleSheet.create({
        input: {
            width: 200,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 20,
            padding: 10,
        }
    })