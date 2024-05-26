// Assignment 2 - 11355543  - SULEMANA ABUBAKAR SADDIQUE
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                My name is <Text style={styles.bold}>Sulemana Abubakar Saddique</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#add8e6', // Changed the background color here
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24, // Increased the font size to 24
    },
    bold: {
        fontWeight: 'bold', // Made the name bold
    },
});
