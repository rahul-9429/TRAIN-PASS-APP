import React from 'react';
import PassDiv from '@/components/PassDiv';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormWithLocalSave from '@/components/FormWithLocalSave';


export default function TabLayout() {
  return (
    <SafeAreaView style={{ backgroundColor: 'white',}}>
    <PassDiv /> 
    {/* <FormWithLocalSave />  */}
    </SafeAreaView>
  );
}
