import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import {StyleSheet, Image, View, useWindowDimensions} from 'react-native';

export default function App() {
  const {width, height} = useWindowDimensions()
    const [loading, setLoading] = useState(true)
  return (
    <View style={styles.container}>
      <Image source={require("./assets/splash.png")} resizeMode={"contain"} style={{width: width, height: height}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8695B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
