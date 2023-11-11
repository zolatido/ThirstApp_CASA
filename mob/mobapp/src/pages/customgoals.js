//customgoals.js

import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

//assets
import bg from '../assets/bg.png';

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
              placeholder="Enter your Drinking Goal"
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
            onPress={setCustomGoal}
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  inputContainer: {
    alignItems: 'center',
    top: 300,
    marginBottom: 30,
    paddingHorizontal: 70,
    paddingVertical: 20,
  },

  inputBox: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
  },

  textInput: {
    flex: 1,
    fontSize:20,
    color: 'white',
    paddingVertical: 10,
  },

  //Enter your drinking goal
  placeholder: {
    color: 'gray',
  },

  //ml
  mlText: {
    color: 'white',
    fontSize: 18,
  },

  addButton: {
    backgroundColor: '#A3D7E7',
    paddingVertical: 23,
    paddingHorizontal: 50,
    borderRadius: 10,
    top: 130,
    alignItems: 'center',
  },

  addButtonLabel: {
    fontSize: 18,
    color: '#333',
  },
});
