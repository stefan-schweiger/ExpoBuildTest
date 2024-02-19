import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useEffect } from 'react';

export default function App() {
  useEffect(() => console.log(process.env.EXPO_PUBLIC_MY_VAR), []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! {process.env.EXPO_PUBLIC_MY_VAR}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
