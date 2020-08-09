import { Image, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import landingImg from '../../../assets/images/landing.png'
import studyIcon from '../../../assets/images/icons/study.png'
import giveClassesIcon from '../../../assets/images/icons/give-classes.png'
import heartIcon from '../../../assets/images/icons/heart.png'
import styles from './styles'

function Landing() {
  const { navigate } = useNavigation()
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections')
      .then(({ data }) => {
        setTotalConnections(data.total)
      })
      .catch(console.error)
  }, [])

  function toGiveClasses() {
    navigate('GiveClasses')
  }

  function toStudy() {
    navigate('Study')
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={toStudy}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>
            Estudar
          </Text>
        </RectButton>

        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={toGiveClasses}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>
            Dar aulas
          </Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export default Landing
