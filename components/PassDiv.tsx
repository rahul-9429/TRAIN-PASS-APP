import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert } from 'react-native';
import ButtonMain from './ui/ButtonMain';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import react_logo from '../assets/images/react-logo.png';

interface SaveDataIp {
  name: string;
  phone: string;
  age: string;
}

const PassDiv = () => {
  const [savedData, setSavedData] = useState<SaveDataIp | null>(null);
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
    <View style={{
        width:'100%',    
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        // marginRight: 20,
       
    }}>
    <Image 
        source={require('../assets/images/left.png')} 
        style={{
            width: 50,
            height: 20,
            marginLeft: 10,

        }} 
      />
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
      <View style={{ backgroundColor: '#82dcdc', width: '100%', padding: 10, paddingHorizontal: 20, borderTopEndRadius: 10, borderTopStartRadius: 10 }}>
        <View style={styles.row}>
          <Text style={{ textAlign: 'center', color: 'black', fontSize: 18, fontWeight: 'bold', justifyContent:'space-around', display:'flex' }}>HAPPY JOURNEY</Text>
          <Text style={styles.badge}>MONTHLY</Text>
        </View>
        <View style={styles.hr}></View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ left: '30%', fontSize: 18, fontWeight: 'bold' }}>ADULT SEASON</Text>
          <Text style={{ textAlign: 'right', fontSize: 18, fontWeight: 'bold' }}>17/02/2025</Text>
        </View>
        <View style={styles.subRow}>
          <Text style={{ fontSize: 18 }}>₹186.00/-</Text>
          <Text style={{ fontSize: 18, marginLeft: 10 }}>{savedData?.phone || 'Add your data'}</Text>
        </View>

        <View style={styles.subRow}>
          <Text style={{ fontSize: 18 }}>UTS No: XWEDE0100A</Text>
          <Text style={{ color: 'red', fontSize: 18, marginLeft: 10 }}>MONTHLY</Text>
        </View>

        <View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 18 }}>Id card Number:</Text>
            <Text style={{ color: 'red', fontSize: 18, marginLeft: 10 }}>372316989812</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 18 }}>Pass:</Text>
            <Text style={{ color: 'red', fontSize: 18,}}>Mr{' '}{savedData?.name || 'Add your data'}</Text>
          </View>
        </View>

        <View style={styles.subRow}>
          <Text style={{ fontSize: 18 }}>
            Age:
            <Text style={{ color: 'red', fontSize: 18, marginLeft: 5 }}>{savedData?.age || 'Add your data'}</Text>
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
            <Text style={{ fontSize: 18 }}>YALAMANCHILI</Text>
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
        <View  style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 10, alignItems: 'center' }}>

        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <View>
              <Text>CLASS:</Text>
            </View>
            <View>
              <Text style={{ color: 'red', fontSize: 15 }}>द्वितीय</Text>
              <Text style={{ color: 'red', fontSize: 15 }}>SECOND</Text>
              <Text style={{ color: 'red', fontSize: 15 }}>ద్వితీయ శ్రేణి</Text>
            </View>
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Text>TRAIN TYPE:</Text>
          </View>
          <View>
            <Text style={{ color: 'red', fontSize: 15 }}>मेल/एक्सप्रेस</Text>
            <Text style={{ color: 'red', fontSize: 15 }}>MAIL / EXP</Text>
            <Text style={{ color: 'red', fontSize: 15 }}>మెయిల్/ఎక్స్‌ప్రెస్</Text>
          </View>
        </View>
</View>
        <View style={styles.hr}></View>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <Text style={{ fontSize: 18 }}>SAC:993277</Text>
          <Text style={{ fontSize: 18 }}>IR: 37AAAGM0768G1Y7</Text>
        </View>

        <View style={styles.subRow}></View>

        <View>
          <Text style={{ textAlign: 'center', fontSize: 17, width: '100%' }}>
            Validity: FROM <Text style={{color:'red'}}>{}</Text> TO <Text style={{color:'red'}} >{addDays(29)}</Text>
          </Text>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={{ width: '60%', fontWeight: 'bold', fontSize: 18 }}>R29442</Text>
          <Text>Distance: 39 km</Text>
        </View>
        <Text style={{ fontSize: 19 }}>BOOKING TIME : 17/02/2025 10:09</Text>
      </View>

      <View style={{ backgroundColor: 'white', width: '100%', padding: 10, paddingHorizontal: 20, borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}>
        <Text style={{ color: 'skyblue' }}>
          It is recommended not to perform factory reset or change your handset whenever you are having a valid ticket on the mobile.
          <Text style={{ color: 'orange', textDecorationLine: 'underline' }}>Click for Changing Handset with Valid Ticket</Text>

        </Text>
        <Text style={{ textAlign: 'center', color: 'red' }}>
          FOR MEDICAL EMERGENCY / FIRST AID, CONTACT TICKET CHECKING STAFF / GUARD OR DIAL 139
        </Text>
        <View style={{ gap: 10 }}>
          <ButtonMain name="OPEN QR CODE" />
          <ButtonMain name="NEXT TRAINS TO DUVVADA" />
          <ButtonMain name="OK" />
        </View>
      </View>
    </View>
    </>

  );
};

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginVertical: 10,
    width: '95%',
  },
  subRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
  },
  container: {
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 8,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#5b2d77',
    color: 'white',
    width: '50%',
    fontSize: 18,
    paddingVertical: 10,
    textAlign: 'center',
  },
});

export default PassDiv;
