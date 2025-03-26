import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface FormData {
  name: string;
  phone: string;
  age: string;
  date: Date;
}

const FormWithLocalSave: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    age: '',
    date: new Date(),
  });

  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    loadLocalData(); 
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    setIsUpdated(false); 
  };

  const saveDataLocally = async () => {
    if (!formData.name || !formData.phone || !formData.age) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(formData));

      axios.post(
        'https://train-backend-six.vercel.app/user',
        {
          name: formData.name,
          pnum: formData.phone,
          age: formData.age,
          Login: formData.date,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      setIsUpdated(true);
      Alert.alert('Success', 'Data saved locally!');
      
      setFormData({ name: '', phone: '', age: '', date: new Date() });
    } catch (error) {
      console.error(error);
    }
  };

  const loadLocalData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      if (data) {
        setFormData(JSON.parse(data));
        setIsUpdated(true);
      } else {
      }
    } catch (error) {
      console.error('Error loading local data:', error);
      Alert.alert('Error', 'Failed to load local data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={formData.phone}
        onChangeText={(value) => handleInputChange('phone', value)}
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={formData.age}
        onChangeText={(value) => handleInputChange('age', value)}
      />

      <Button title="Save/Update Data" onPress={saveDataLocally} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  status: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormWithLocalSave;
