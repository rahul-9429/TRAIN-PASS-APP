import React from 'react';
import PassDiv from '@/components/PassDiv';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StatusBar, View } from 'react-native';

export default function TabLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: 'orange' }}> 
      
      <StatusBar backgroundColor="darkorange" barStyle="light-content" translucent={false} />

      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <PassDiv />
        </ScrollView>
      </SafeAreaView>

    </View>
  );
}
