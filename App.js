import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import {StyleSheet, Image, View, useWindowDimensions} from 'react-native';

export default function App() {
  const {width, height} = useWindowDimensions()
    const [loading, setLoading] = useState(true)
  return (
    <View style={styles.container}>
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
