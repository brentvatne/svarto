import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import AppLoading from "expo-app-loading";

import {StyleSheet, Image, View, useWindowDimensions} from 'react-native';

export default function App() {
  const {width, height} = useWindowDimensions()
    const [loading, setLoading] = useState(true)
  return (
    <View style={styles.container}>
        {loading &&    <AppLoading         // Instruct SplashScreen not to hide yet, we want to do this manually
            autoHideSplash={true}
            startAsync={() => {}}
            onError={console.error}
            onFinish={() => setTimeout(() => setLoading(false), 2000)}
        />}
      <Image source={require("./assets/splash.png")} style={{width: width, height: height}} resizeMode={"contain"}/>
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
