import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

//assets
import bg from '../assets/bg.png';

export default function PersonalWeight({ navigation }) {
  const [userinput, setCustom] = useState('');
  const [error, setError] = useState('');

  const setCustomGoal = () => {
    // Check if userinput is empty
    if (!userinput) {
      setError('Please enter your weight.');
      return;
    }

    // Clear any previous error
    setError('');

    // Pass the custom goal to the PersonalAge screen
    navigation.navigate('PersonalAge', { customGoal: userinput });
  };

  return (
    <ImageBackground source={bg} style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <TextInput
              style={[styles.textInput, !userinput && styles.placeholder]}
              placeholder="Enter your Weight"
              onChangeText={(text) => {
                text = text.replace(/[^0-9]/g, '').slice(0, 3);
                setCustom(text);
              }}
              value={userinput}
              keyboardType="numeric"
            />
            <Text style={styles.kgText}>KG</Text>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={setCustomGoal}
          >
            <Text style={styles.addButtonLabel}>Finish</Text>
          </TouchableOpacity>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}
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

  //kg
  kgText: {
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

  // Error message text
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
