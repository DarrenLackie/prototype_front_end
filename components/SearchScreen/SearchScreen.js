import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';



export default function SearchScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search Screen</Text>
        <Text>Filters</Text>
        <Button
        title="Car"
        onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Button
        title="Bicycle"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
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