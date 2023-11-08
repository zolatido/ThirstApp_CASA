import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';



//assets
import logodrink from '../assets/logotrans.png';
import bg from '../assets/bg.png';



export default function Goals({ navigation }) {
  const [username, setUsername] = useState('');

  return (
    <ImageBackground
      source={bg}
      style={styles.container}
    >
        <View style={styles.overlay}>
          <View style={styles.appContainer}>
            <Image source={logodrink} style={styles.logo} />
            <Text style={styles.headerMotto2}>Are you ready for ThirstApp?</Text>
            <Text style={styles.headerMotto3}>First, what should we call you?</Text>

            <View style={styles.inputContainer}>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  placeholder="    Enter your Username"
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                />
              </View>
            </View>

          
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('Goals')}
            >
              <Text style={styles.addButtonLabel}>Let's Go!</Text>
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
  

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 16,
    alignItems: 'center',
    
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },


  //baboy na umiinom
  logo: {
    height: 170, // size nung logo
    width:170, // size nung loge
    top: 55,
    alignItems: 'center',
    
  },
 
  headerText: {
    fontSize: 24,
    
    color: "white",
  },
  
  //(HOME)Welcome to hydrate4Today
  headerMotto: {
    fontSize: 50,
    
    color: "white",
    top: 55,
    
  },

  //(HOME)started
  headerMotto2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white",
    top: 50,
  },

  //Stay hydrated
  headerMotto3: {
    fontSize: 20,
    color: "white",
    top: 70,
   
    
  },

  inputContainer: {
    alignItems: 'center',
    top: 120,
    marginBottom: 5,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  inputBox: {
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 6,
    paddingHorizontal: 50,
    paddingVertical: 20,
  },

  //user input
  textInput: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 2,
    color: 'white',
    borderColor: 'white',
    paddingVertical: 15,
    paddingHorizontal:10,
    alignContent: 'center',
  },

  //get started button
  addButton: {
    backgroundColor: '#8BADD3', // Creamy aesthetic color
    
    paddingVertical: 23,
    paddingHorizontal: 70,
    borderRadius: 10,
    bottom: -150,
    alignItems:'center',
    
  },

  //text sa button
  addButtonLabel: {
    fontSize: 23,
    color: '#333', // Text color
    
    
  },


  headerLabel: {
    fontSize: 30,
    color: 'white', // Text color
  },


  goalListContainer: {
    marginTop: 20,
    
  },
  goalItems: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  goalText: {
    fontSize: 18,
  },
});