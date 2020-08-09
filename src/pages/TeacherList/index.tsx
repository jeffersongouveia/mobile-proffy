import React, { useState } from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import styles from './styles'

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  const buttonToggleFilter = (
    <BorderlessButton
      style={{ padding: 15 }}
      onPress={() => setIsFiltersVisible(!isFiltersVisible)}
    >
      <Feather name="filter" size={20} color="#FFF" />
    </BorderlessButton>
  )

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
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia"
                  placeholderTextColor="#C1BCCC"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o horário"
                  placeholderTextColor="#C1BCCC"
                />
              </View>
            </View>

            <RectButton style={styles.buttonSubmit}>
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
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}

export default TeacherList
