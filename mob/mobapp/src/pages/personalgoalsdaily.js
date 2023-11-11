import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

// assets
import logodrink from '../assets/logotrans.png';
import bg from '../assets/bg.png';

export default function PersonalDailyGoal({ route, navigation }) {
  const [dailyGoal, setDailyGoal] = useState(0); // Initialize with 0 or the default value

  // Function to calculate the total daily water intake based on the provided formula
  const calculateDailyGoal = (weight, age, playFrequency) => {
    // Base Water Intake Rate (ml/kg)
    const baseWaterIntakeRate = Math.floor(Math.random() * (35 - 30 + 1)) + 30; // Random value in the range [30, 35]

    // Base Water Intake
    const baseWaterIntake = weight * baseWaterIntakeRate;

    // Activity Level Adjustment
    let activityLevelAdjustment;
    switch (playFrequency) {
      case 'Rarely':
        activityLevelAdjustment = 0.8;
        break;
      case 'Normal':
        activityLevelAdjustment = 1.0;
        break;
      case 'Often':
        activityLevelAdjustment = 1.2;
        break;
      case 'Always':
        activityLevelAdjustment = 1.5;
        break;
      default:
        activityLevelAdjustment = 1.0; // Default to Normal if playFrequency is not recognized
    }

    // Total Daily Water Intake
    const totalDailyWaterIntake = baseWaterIntake * activityLevelAdjustment;

    return totalDailyWaterIntake;
  };

  // You need to calculate the daily goal based on the provided user information
  useEffect(() => {
    // Access user information from the route.params and calculate the daily goal
    const { weight, age, sports } = route.params;
    // Perform your calculation here and set the value using setDailyGoal
    const calculatedGoal = calculateDailyGoal(weight, age, sports);
    setDailyGoal(calculatedGoal);
  }, [route.params]); // Trigger recalculation when user information changes

  const handleFinish = () => {
    // Navigate to the Dashboard screen and pass the calculated daily goal
    navigation.navigate('Dashboard', { dailyGoal });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View style={styles.appContainer}>
            <Image source={logodrink} style={styles.logo} />
            <Text style={styles.headerMotto2}>Your Daily Goal is {dailyGoal} ml</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleFinish}
            >
              <Text style={styles.addButtonLabel}>Finish</Text>
            </TouchableOpacity>
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

  //baboy na umiinom
  logo: {
    height: 170, // size nung logo
    width:170, // size nung loge
    top: 120,
    alignItems: 'center',
    
  },
  
  //Hydrate Your Way to Health!
  headerMotto2: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "white",
    top: 140,
  },

  //-Arwen
  headerMotto3: {
    fontSize: 19,
    color: "white",
    top: 160,
  },

  addButton: {
    backgroundColor: '#8BADD3',
    paddingVertical: 23,
    paddingHorizontal: 70,
    borderRadius: 10,
    top: 200,
    alignItems: 'center',
  },

  addButtonLabel: {
    fontSize: 23,
    color: '#333',
  },
});