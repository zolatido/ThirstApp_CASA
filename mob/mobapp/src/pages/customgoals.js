//customgoals.js

import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';


//assets
import bg from '../assets/superlight.jpg';

export default function CustomGoals({ navigation }) {
  const [userinput, setCustom] = useState('');

  const setCustomGoal = () => {
    // Pass the custom goal to the Dashboard screen
    navigation.navigate('Dashboard', { customGoal: userinput });
  };

  return (
    <ImageBackground source={bg} style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <TextInput
              style={[styles.textInput, !userinput && styles.placeholder]}
              placeholder="Enter your Drink Goal"
              onChangeText={(text) => {
                text = text.replace(/[^0-9]/g, '').slice(0, 4);
                setCustom(text);
              }}
              value={userinput}
              keyboardType="numeric"
            />
            <Text style={styles.mlText}>ML</Text>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text style={styles.addButtonLabel}>Finish</Text>
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
  inputContainer: {
    alignItems: 'center',
    top: 175,
    marginBottom: 30,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  inputBox: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: 'black',
    paddingVertical: 10,
  },
  placeholder: {
    color: 'white',
  },
  mlText: {
    color: 'black',
    fontSize: 18,
  },
  addButton: {
    backgroundColor: '#A3D7E7',
    paddingVertical: 23,
    paddingHorizontal: 50,
    borderRadius: 10,
    top: 150,
    alignItems: 'center',
  },
  addButtonLabel: {
    fontSize: 18,
    color: '#333',
  },
});
