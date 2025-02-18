import React from 'react';
import PassDiv from '@/components/PassDiv';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormWithLocalSave from '@/components/FormWithLocalSave';
import App from '@/components/Test';
import { StatusBar, View } from 'react-native';

export default function TabLayout() {
  return (
    <View style={{backgroundColor:'orange'}}>

    <SafeAreaView style={{ backgroundColor: 'white', overflowY: 'scroll' }}>
    <StatusBar
        backgroundColor="darkorange"  
        barStyle="light-content"  
        translucent={false} 
      />
    <PassDiv /> 
    </SafeAreaView>

    </View>

  );
}
