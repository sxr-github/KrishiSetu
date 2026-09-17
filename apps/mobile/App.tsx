import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KrishiSetu</Text>
      <Text style={styles.subtitle}>Project foundation is ready.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0fdf4',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#14532d',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#15803d',
  },
});
