import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import logodrink from '../assets/logotrans.png'
import bg from '../assets/superlight.jpg'
export default function Reminder({ navigation }) {
  const [courseGoals, setCourseGoals] = useState([]);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function addGoalHandler() {
    // You can handle this function as needed.
  }

  return (
    <ImageBackground
      source={bg}
      style={styles.container}
    >
      <View style={styles.overlay}>
        

        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <TextInput
              style={[styles.textInput, !username && styles.placeholder]} // Apply the placeholder style when the input is empty
              placeholder="Enter your Drink Goal"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              onChangeText={(text) => {
                // Use regular expression to keep only up to 3 digits
                text = text.replace(/[^0-9]/g, '').slice(0, 3);
                setUsername(text);
              }}
              value={username}
              keyboardType="numeric" // This restricts input to numeric characters
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
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  logo: {
    height: 170,
    width: 170,
  },

  headerText: {
    fontSize: 50,
   
    color: 'white',
  },

  headerMotto: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
  },

  inputContainer: {
    alignItems: 'center',
    top: 175,
    marginBottom: 30,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  inputBox: {
    flexDirection: 'row', // Added to display text next to the input
    borderBottomWidth: 2, // Added to create a line instead of a box
    borderColor: 'white',
    alignItems: 'center', // Added to center items horizontally
  },
  textInput: {
    flex: 1, // Added to make the input take the available space
    color: 'black',
    paddingVertical: 10,
  },
  placeholder: {
    color: 'white', // Customize the text color for placeholder
  },
  mlText: {
    color: 'black',
    fontSize: 18,
  },
  addButton: {
    backgroundColor: '#A3D7E7',
    paddingVertical: 23,
    paddingHorizontal: 50, // Adjust the width of the button
    borderRadius: 10,
    top: 150,
    alignItems: 'center',
  },
  
  addButtonLabel: {
    fontSize: 18,
    color: '#333',
    
  },
  headerLabel: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
});