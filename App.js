import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Hello and welcome to your first React Native application !</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Well done !', 'Button clicked ')}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#F5F7FA', alignItems: 'center', justifyContent: 'center', padding: 20,
  },
  title: {
    fontSize: 18, fontWeight: '600', textAlign: 'center', color: '#222', marginBottom: 30,
  },
  button: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#4A90E2',
    paddingVertical: 12, paddingHorizontal: 28, borderRadius: 25,
  },
  buttonText: {
    color: '#fff', fontSize: 16, fontWeight: '600', marginLeft: 8,
  },
});
