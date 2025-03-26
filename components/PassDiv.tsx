import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Button, StatusBar, TouchableOpacity, Modal, ScrollView } from 'react-native';
import ButtonMain from './ui/ButtonMain';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormWithLocalSave from './FormWithLocalSave'; 
import { usePreventScreenCapture } from "expo-screen-capture";

interface SaveDataIp {
  name: string;
  phone: string;
  age: string;
}

const PassDiv = () => {
  usePreventScreenCapture(); 
  const [savedData, setSavedData] = useState<SaveDataIp | null>(null);
  const [isVisible, setIsVisible] = useState(false);  
  const toggleModal = () => {
    setIsVisible(!isVisible);
  }
  const addDays = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days); 
    return date.toLocaleDateString();
  };

  
  const subtractDays = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() - days); 
    return date.toLocaleDateString();
  };

  useEffect(() => {
  StatusBar.setBackgroundColor('darkorange');

    const fetchData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        if (data) {
          setSavedData(JSON.parse(data));
        } else {
          console.log('No data found');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return (
    <>
     <StatusBar
        backgroundColor="darkorange">
     </StatusBar>
      
      <View style={{
        flex: 1,
}}>

      <View style={{
        width: '100%',    
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
     
      
}}>
        <Image 
          source={require('../assets/images/left.png')} 
          style={{
            width: 50,
            height: 20,
            marginLeft: 10,
          }} 
        />
       <Text
       style={{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        // fontColor: 'black',
       }}
       >
        IR Unserved Ticket
       </Text>
        <Image 
          source={require('../assets/images/railway.png')} 
          style={{
            width: 40,
            height: 40,
            marginRight: 10
          }} 
        />
      </View>

      <View style={styles.container}>
        <View style={{ backgroundColor: '#82dcdc', width: '100%', padding: 10, paddingHorizontal: 20,  }}>
          <View style={styles.row}>
            <Text style={{
              padding: 6,
              width: '50%',
              color:'black',
              fontWeight: 'bold',
              fontSize:18,
              textAlign: 'center', }}>HAPPY JOURNEY</Text> 
            <Text style={{
              backgroundColor: '#5b2d77',
              padding: 6,
              width: '50%',
              color:'white',
              fontWeight: 'bold',
              fontSize:18,
              textAlign: 'center',
            }}>MONTHLY</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ left: '30%', fontSize: 18, fontWeight: 'bold' }}>ADULT SEASON</Text>
            <Text style={{ textAlign: 'right', fontSize: 18, fontWeight: 'bold' }}>{subtractDays(10)}</Text>
          </View>
          <View style={styles.subRow}>
            <Text style={{ fontSize: 17 }}>₹185.00/-</Text>
            <Text style={{ fontSize: 17, marginLeft: 10 }}>{savedData?.phone || 'Add your data'}</Text>
          </View>

          <View style={styles.subRow}>
            <Text style={{ fontSize: 16 }}>UTS No: XWEDE0100A</Text>
            <Text style={{ color: 'red', fontSize: 16, marginLeft: 10 }}>MONTHLY</Text>
          </View>

          <View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16 }}>Id card Number:</Text>
              <Text style={{ color: 'red', fontSize: 16, marginLeft: 10,fontWeight:"bold" }}>372316989812</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16 }}>Pass:</Text>
              <Text style={{ color: 'red', fontSize: 18, fontWeight:"bold" }}>Mr{' '}{savedData?.name || 'Add your data'}</Text>
            </View>
          </View>

          <View style={styles.subRow}>
            <Text style={{ fontSize: 16 }}>
              Age:
              <Text style={{ color: 'red', fontSize: 16, marginLeft: 5,fontWeight:"bold" }}>{savedData?.age || 'Add your data'}</Text>
            </Text>
            <Text style={{ color: 'red', fontSize: 18, marginLeft: 10 }}>Between</Text>
          </View>

          <View style={styles.hr}></View>

          <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <View style={{ backgroundColor: '#5b2d77', width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>S</Text>
            </View>
            <View>
              <Text style={{ fontSize: 17 }}>यलमंचिली</Text>
              <Text style={{ fontSize: 18 }}>ELAMANCHILI</Text>
              <Text style={{ fontSize: 17 }}>యలమంచిలి</Text>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 10, alignItems: 'center' }}>
            <View style={{ backgroundColor: '#5b2d77', width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>D</Text>
            </View>
            <View>
              <Text style={{ fontSize: 17 }}>द्वितीय</Text>
              <Text style={{ fontSize: 18 }}>DUVVADA</Text>
              <Text style={{ fontSize: 17 }}>दुव्वाड़ा</Text>
            </View>
          </View>

              <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
              >
         {/* CLASS and TRAIN TYPE Sections */}
<View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
  <View
    style={{
      width: '45%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',

    }}
  >
    <View>
      <Text>CLASS:</Text>
    </View>
    <View>
      <Text style={{ color: 'red', fontWeight:'bold' ,fontSize:16 }}>द्वितीय</Text>
      <Text style={{ color: 'red', fontWeight:'bold', fontSize:16 }}>SECOND</Text>
      <Text style={{ color: 'red', fontWeight:'bold', fontSize:16 }}>ద్వితీయ శ్రేణి</Text>
    </View>
  </View>
  <View
    style={{
      width: 'auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <View>
      <Text>TRAIN TYPE:</Text>
    </View>
    <View>
      <Text style={{ color: 'red', fontWeight:'bold', fontSize:16 }}>मेल/एक्सप्रेस</Text>
      <Text style={{ color: 'red', fontWeight:'bold', fontSize:16 }}>MAIL / EXP</Text>
      <Text style={{ color: 'red', fontWeight:'bold', fontSize:16 }}>మెయిల్/ఎక్స్‌ప్రెస్</Text>
    </View>
  </View>
</View>
              </View>

          {/* Additional content of PassDiv here */}
          <View style={styles.hr}></View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <Text style={{ fontSize: 18 }}>SAC:993277</Text>
            <Text style={{ fontSize: 18 }}>IR: 37AAAGM0768G1Y7</Text>
          </View>

          <View style={{
            height:1,
            width:'100%',
            backgroundColor:'black',
          }}></View>

          <View>
            <Text style={{  fontSize: 17, width: '100%', }}>
              Validity: FROM <Text style={{ color: 'red',fontWeight:'bold' }}>{subtractDays(10)}</Text> TO <Text style={{ color: 'red',fontWeight:'bold' }} >{addDays(20)}</Text>
            </Text>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ width: '60%', fontWeight: 'bold', fontSize: 16 }}>R29442</Text>
            <Text>Distance: 39 km</Text>
          </View>
          <Text style={{ fontSize: 18 }}>BOOKING TIME : {subtractDays(10)} 09:11 AM</Text>
        </View>

        <View style={{ backgroundColor: 'white', width: '100%', padding: 10, paddingHorizontal: 20, borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}>
          <Text style={{ color: 'skyblue' }}>
            It is recommended not to perform factory reset or change your handset whenever you are having a valid ticket on the mobile.
            <Text style={{ color: 'orange', textDecorationLine: 'underline' }}>
              Click for Changing Handset with Valid Ticket
            </Text>
          </Text>
          <Text style={{ textAlign: 'center', color: 'red', fontSize: 13 }}>
            FOR MEDICAL EMERGENCY / FIRST AID, CONTACT TICKET CHECKING STAFF / GUARD OR DIAL 139
          </Text>
          <View style={{ gap: 6 }}>
            <ButtonMain name="OPEN QR CODE" />
            <View style={{ backgroundColor: '#f76b1c', width: '100%', padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}>
              <TouchableOpacity onPress={toggleModal} style={{ padding: 0 }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize:14 }}>NEXT TRAINS TO DUVVADA</Text>
              </TouchableOpacity>
            </View>
            <ButtonMain name="OK" />
          </View>
          
        </View>
      </View>
      <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize:14,
            // fontWeight: 'bold',
            marginTop: 25,
          }}
          >
            Center for Railway Information Systems (CRIS)
          </Text>
    </View>
     
      {/* Modal for FormWithLocalSave */}
      <Modal visible={isVisible} animationType="fade" transparent={true} onRequestClose={toggleModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <FormWithLocalSave />
            </ScrollView>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '90%', // Adjust width to fit most screens
    maxWidth: 400, // Add a max width to avoid very large modals on big screens
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  scrollViewContainer: {
    paddingBottom: 20, // Ensure there's space at the bottom for form elements
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  container: {
    width: '90%',
    marginLeft:20,
    marginTop:10,
    // borderColor: 'black',
    // borderWidth: 1,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  badge: {
    backgroundColor: 'red',
    borderRadius: 30,
    fontSize: 18,
    color: 'white',
    padding: 5,
    marginRight: 5,
  },
  hr: {
    borderBottomWidth: 2,
    marginVertical: 3,
    borderColor: 'black',
  },
  subRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PassDiv;