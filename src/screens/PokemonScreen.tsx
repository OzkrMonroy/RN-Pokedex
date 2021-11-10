import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native'
import { RootStackParams } from '../navigation/StackNavigation'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{}

export const PokemonScreen = ({ navigation, route } : Props) => {
  const { pokemon, color } = route.params
  return (
    <View>
      <Text>Pokemon: {pokemon.name}</Text>
      <Button title='Ir a home' onPress={() => navigation.goBack()}/>
    </View>
  )
}
