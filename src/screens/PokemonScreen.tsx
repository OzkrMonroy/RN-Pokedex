import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native'

interface Props extends StackScreenProps<any, any>{}

export const PokemonScreen = ({ navigation } : Props) => {
  return (
    <View>
      <Text>Pokemon screen</Text>
      <Button title='Ir a home' onPress={() => navigation.goBack()}/>
    </View>
  )
}
