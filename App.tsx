import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

import AppStack from './src/routes/AppStack'

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    Font.loadAsync({
      Archivo_400Regular: require('./assets/fonts/Archivo/Archivo-Regular.ttf'),
      Archivo_700Bold: require('./assets/fonts/Archivo/Archivo-Bold.ttf'),
      Poppins_400Regular: require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
      Poppins_600SemiBold: require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    })
      .then(() => {
        setFontsLoaded(true)
      })
      .catch(console.error)
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  )
}
