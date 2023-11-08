import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';



//assets
import logodrink from '../assets/logotrans.png';
import bg from '../assets/bg.png';



export default function Username({ navigation }) {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    // Clear the input field
    setEnteredGoalText('');
  }

  return (
   
      <View style={styles.container}>
      <ImageBackground
        source={bg}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.appContainer}>
            <Image source={logodrink} style={styles.logo} />
            <Text style={styles.headerMotto2}>Hydrate Your Way to Health!</Text>
            <Text style={styles.headerMotto3}>Drinking tubig kasi </Text>
            <Text style={styles.headerMotto3}>di na muling iibig 🥹</Text>
            <Text style={styles.headerMotto3}>-Arwen 2023</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('Username')}
            >
              <Text style={styles.addButtonLabel}>Get Started</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.goalListContainer}>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => (
                <View style={styles.goalItems}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
                </View>
              )}
            />
          </View>
          
        </View>
        </ImageBackground>
    </View>
    
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
    fontSize: 15,
    color: "white",
    top: 60,
   
    
  },

  inputContainer: {
    
    alignItems: 'center',
    marginBottom: 75,
  },

  //user input
  textInput: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingVertical: 4,
    paddingHorizontal: 2,
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