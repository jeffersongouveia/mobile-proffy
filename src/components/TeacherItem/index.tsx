import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api'

import heartOutlineIcon from '../../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../../assets/images/icons/whatsapp.png'
import styles from './styles'

export interface Teacher {
  id: number
  name: string
  subject: string
  cost: number
  avatar: string
  whatsapp: string
  bio: string
}

interface TeacherItemProps {
  teacher: Teacher
  favorite: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorite }) => {
  const [isFavorite, setIsFavorite] = useState(favorite)

  async function handleToggleFavorite() {
    const favoritesTeachers = await AsyncStorage.getItem('favorites')
    let newFavoritesTeachers = []

    if (favoritesTeachers) {
      newFavoritesTeachers = JSON.parse(favoritesTeachers)
    }

    if (isFavorite) {
      const index = newFavoritesTeachers.findIndex((t: Teacher) => t.id === teacher.id)
      newFavoritesTeachers.splice(index, 1)
    } else {
      newFavoritesTeachers.push(teacher)
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(newFavoritesTeachers))
    setIsFavorite(!isFavorite)
  }

  function handleConnections() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.containerButtons}>
          <RectButton
            style={[
              styles.buttonFavorite,
              isFavorite ? styles.favorited : {},
            ]}
            onPress={handleToggleFavorite}
          >
            {isFavorite ? <Image source={unfavoriteIcon} /> : <Image source={heartOutlineIcon} />}
          </RectButton>

          <RectButton style={styles.buttonContact} onPress={handleConnections}>
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
