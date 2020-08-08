import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import giveClassesBgImg from '../../../assets/images/give-classes-background.png'
import styles from './styles'

function GiveClasses() {
  const { goBack } = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImg}
        resizeMode="contain"
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web
        </Text>
      </ImageBackground>

      <RectButton style={styles.buttonOk} onPress={goBack}>
        <Text style={styles.buttonOkText}>
          Tudo bem
        </Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses
