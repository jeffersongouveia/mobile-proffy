import React from 'react'
import { Image, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../../assets/images/icons/whatsapp.png'
import styles from './styles'

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://pbs.twimg.com/profile_images/1262289899786559489/wxFM6Q30_400x400.jpg' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Emma Bostian</Text>
          <Text style={styles.subject}>Front End</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Software Engineer at @spotify in Stockholm 🇸🇪{'\n'}
        Podcasting @ladybugpodcast 🎙💻{'\n'}
        American Abroad 🇺🇸
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 80,00</Text>
        </Text>

        <View style={styles.containerButtons}>
          <RectButton style={[styles.buttonFavorite, styles.favorited]}>
            {/*<Image source={heartOutlineIcon} />*/}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.buttonContact}>
            <Image source={whatsappIcon} />
            <Text style={styles.buttonContactText}>
              Entrar em contato
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem
