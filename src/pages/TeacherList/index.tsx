import React, { useEffect, useState } from 'react'
import AsyncStorage  from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { ScrollView, Text, TextInput, View } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [teachers, setTeachers] = useState([])
  const [favoriteTeachers, setFavoriteTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  const buttonToggleFilter = (
    <BorderlessButton
      style={{ padding: 15 }}
      onPress={() => setIsFiltersVisible(!isFiltersVisible)}
    >
      <Feather name="filter" size={20} color="#FFF" />
    </BorderlessButton>
  )

  function loadFavoritesTeachers() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        setFavoriteTeachers(JSON.parse(response))
      }
    })
  }

  async function handleFilterSubmit() {
    loadFavoritesTeachers()

    let params = { subject, time, week_day: weekDay }
    const { data } = await api.get('classes', { params })
    setTeachers(data)
    setIsFiltersVisible(false)
  }

  useEffect(() => {
    handleFilterSubmit()
  }, [])

  useFocusEffect(() => {
    loadFavoritesTeachers()
  })

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" buttonRight={buttonToggleFilter}>
        {isFiltersVisible && (
          <View style={styles.formSearch}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria"
              placeholderTextColor="#C1BCCC"
              value={subject}
              onChangeText={setSubject}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia"
                  placeholderTextColor="#C1BCCC"
                  value={weekDay}
                  onChangeText={setWeekDay}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o horário"
                  placeholderTextColor="#C1BCCC"
                  value={time}
                  onChangeText={setTime}
                />
              </View>
            </View>

            <RectButton style={styles.buttonSubmit} onPress={handleFilterSubmit}>
              <Text style={styles.buttonSubmitText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorite={favoriteTeachers.some((t: Teacher) => t.id === teacher.id)}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default TeacherList
