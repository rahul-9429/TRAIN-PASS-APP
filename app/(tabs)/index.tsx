import { Image, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PassDiv from '@/components/PassDiv';
import FormWithLocalSave from '../../components/FormWithLocalSave';
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: '#f76b1c',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      overflowY:'scroll',
    }}>
      {/* <FormWithLocalSave />  */}
      {/* <PassDiv /> */}
       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
