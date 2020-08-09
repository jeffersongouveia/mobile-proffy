import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { ScrollView, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'

function Favorites() {
  const [favoriteTeachers, setFavoriteTeachers] = useState([])

  function loadFavoritesTeachers() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        setFavoriteTeachers(JSON.parse(response))
      }
    })
  }

  useFocusEffect(() => {
    loadFavoritesTeachers()
  })

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favoriteTeachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorite
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Favorites
