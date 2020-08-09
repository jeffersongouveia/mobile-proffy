import React from 'react'
import { Image, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../../assets/images/icons/back.png'
import logoImg from '../../../assets/images/logo.png'
import styles from './styles'

interface PageHeaderProps {
  title: string
  buttonRight?: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, buttonRight, children }) => {
  const { navigate } = useNavigation()

  function goLanding() {
    navigate('Landing')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={goLanding}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>
          {title}
        </Text>

        {buttonRight}
      </View>

      {children}
    </View>
  )
}

export default PageHeader
