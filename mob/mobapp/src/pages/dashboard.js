import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import bottle from '../assets/bottle.png';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Modal } from 'react-native';
import bg from '../assets/bg.png';

export default function Dashboard() {
  const dailyGoal = 2000;
  const increment = 250;
  const [consumedWater, setConsumedWater] = useState(0);
  const [message, setMessage] = useState(null);
  const [consumptionHistory, setConsumptionHistory] = useState([]);
  const [meterFill, setMeterFill] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

   const addWater = () => {
    const newConsumedWater = consumedWater + increment;

    // Calculate meter fill percentage based on the consumption percentage
    const newMeterFill = Math.min((newConsumedWater / dailyGoal) * 100, 100);
    setMeterFill(newMeterFill);

    // Add the consumption record to the history
    const timestamp = new Date().toLocaleTimeString();
    const record = `${timestamp}: +${increment}ml`;
    consumptionHistory.unshift(record); // Add the new record at the beginning of the array

    // Show the message
    setMessage('Good Job +250ml');

    // Hide the message after 0.5 seconds
    setTimeout(() => {
      setMessage(null);
    }, 500);

    setConsumedWater(newConsumedWater);
  };

  const scheduleReminder = () => {
    // Implement your logic for scheduling a reminder here
  };

  const scheduleNotification = () => {
    // Implement your logic for scheduling a notification here
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeSlideInModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bg}
        style={styles.backgroundImage}
      >
        <View style={styles.appContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={toggleModal}>
              <DehazeIcon />
            </TouchableOpacity>
          </View>
          <Text style={styles.header}>Water Consumption Dashboard</Text>
          <View style={styles.meterContainer}>
            <View style={styles.meter}>
              <View style={[styles.fill, { height: `${meterFill}%` }]} />
            </View>
          </View>
          <Text style={styles.consumedText}>{consumedWater} ml</Text>
          <Text style={styles.goalText}>Goal: {dailyGoal} ml</Text>
          <TouchableOpacity onPress={addWater}>
            <Image source={bottle} style={styles.touchableWaterBottle} />
          </TouchableOpacity>
          {message && <Text style={styles.messageText}>{message}</Text>}
          <ScrollView style={styles.historyContainer}>
            {consumptionHistory.map((record, index) => (
              <View key={index} style={styles.historyRecord}>
                <Text style={styles.historyText}>{record}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={scheduleReminder}>
              <Text style={styles.buttonText}>Schedule Reminder   </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={scheduleNotification}>
              <Text style={styles.buttonText}>Schedule Notification</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <Modal
        
        transparent={true}
        visible={isModalVisible}
       
        onBackdropPress={closeSlideInModal}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Modal Content Goes Here</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.buttonText}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   
    left: -165,
    top: 40,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  meterContainer: {
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  meter: {
    width: 200,
    height: 200,
    backgroundColor: 'lightgray',
    borderRadius: 100,
    overflow: 'hidden',
  },
  fill: {
    width: '100%',
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 0,
  },
  consumedText: {
    fontSize: 18,
    marginTop: 10,
  },
  goalText: {
    fontSize: 16,
    marginTop: 10,
  },
  touchableWaterBottle: {
    width: 80,
    height: 160,
    marginTop: 20,
  },
  messageText: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
  },
  historyContainer: {
    maxHeight: 200,
    width: 230,
    marginTop: 20,
    borderWidth: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
  },
  historyRecord: {
    marginBottom: 10,
  },
  historyText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
});
