import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function Dashboard({ navigation }) {
  return (
    <ImageBackground
      source={require('/Users/Sanchez/Desktop/superlight.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.addButtonLabel}>
            Setup your personal water
          </Text>
          <Text style={styles.addButtonLabel}>
            requirement in four steps
          </Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.goalButton}
            onPress={() => {
              // Handle "Rarely" button click
            }}
          >
            <Text style={styles.goalButtonLabel}>Rarely</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.goalButton}
            onPress={() => {
              // Handle "Normal" button click
            }}
          >
            <Text style={styles.goalButtonLabel}>Normal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.goalButton}
            onPress={() => {
              // Handle "Often" button click
            }}
          >
            <Text style={styles.goalButtonLabel}>Often</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.goalButton}
            onPress={() => {
              // Handle "Very Often" button click
            }}
          >
            <Text style={styles.goalButtonLabel}>Very Often</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -200,
    marginLeft: 20,
  },
  logoContainer: {
    marginRight: 10,
  },
  logo: {
    height: 140,
    width: 140,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    alignItems: 'center',
    bottom: 40,
    marginBottom: 30,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  addButton: {
    backgroundColor: '#8BADD3',
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 30,
    bottom: 170,
    alignItems: 'center',
  },
  addButtonLabel: {
    fontSize: 15,
    color: '#333',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column', // Change to 'column' to line up buttons vertically
    alignItems: 'center', // Align items in the center
    marginTop: 20,
  },
  goalButton: {
    backgroundColor: '#8BADD3',
    paddingVertical: 20, // Adjust the height of the button
    paddingHorizontal: 30, // Adjust the width of the button
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10, // Add some vertical spacing between buttons
  },
  goalButtonLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});