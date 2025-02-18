import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the type for the form data
interface FormData {
  name: string;
  phone: string;
  age: string;
  date:Date;
}

const FormWithLocalSave: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    age: '',
    date: new Date(),
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const saveDataLocally = async () => {
    if (!formData.name || !formData.phone || !formData.age) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(formData));
      Alert.alert('Success', 'Data saved locally!');
      setFormData({ name: '', phone: '', age: '' ,date: new Date}); // Reset the form
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to save data');
    }
  };

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      if (data) {
        Alert.alert('Saved Data', data);
      } else {
        Alert.alert('No Data Found', 'No saved data available');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch data');
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

      <Button title="Save Data" onPress={saveDataLocally} />
      <View style={{ marginTop: 10 }}>
        <Button title="Get Saved Data" onPress={getData} />
      </View>
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
});

export default FormWithLocalSave;
