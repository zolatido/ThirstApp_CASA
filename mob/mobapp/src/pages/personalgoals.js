import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function Dashboard({ navigation, route }) {
  const handleButtonPress = (goalType) => {
    // Navigate to PersonalGoalsWeight screen with the selected goal type
    navigation.navigate('PersonalWeight', { ...route.params, sports: goalType });
  };

  return (
    <ImageBackground
      source={require('/Users/Sanchez/Desktop/bg.png')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.questionText}>How often do you do sports?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.goalButton}
            onPress={() => handleButtonPress('Rarely')}
          >
            <Text style={styles.goalButtonLabel}>Rarely</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.goalButton}
            onPress={() => handleButtonPress('Normal')}
          >
            <Text style={styles.goalButtonLabel}>Normal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.goalButton}
            onPress={() => handleButtonPress('Often')}
          >
            <Text style={styles.goalButtonLabel}>Often</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.goalButton}
            onPress={() => handleButtonPress('Always')}
          >
            <Text style={styles.goalButtonLabel}>Always</Text>
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
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },

  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -200,
    marginLeft: 20,
  },

  logo: {
    height: 140,
    width: 140,
  },

  questionText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },

  goalButton: {
    backgroundColor: '#8BADD3',
    height: 80,
    width: 200,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center', // Center the text vertically
    marginVertical: 10,
  },

  goalButtonLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center', // Center the text horizontally
  },
});
