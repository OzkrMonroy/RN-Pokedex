import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../../navigation/StackNavigation'
import { pokemonScreenStyles } from './pokemonScreenStyles'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FadeInImage } from '../../components/FadeInImage'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{}

export const PokemonScreen = ({ navigation, route } : Props) => {
  const { top } = useSafeAreaInsets()
  const { pokemon, color } = route.params

  const { name, id, picture } = pokemon

  return (
    <View>
      <View style={{
        ...pokemonScreenStyles.headerContainer,
        backgroundColor: color,
      }}>
        <TouchableOpacity 
          activeOpacity={0.8}
          style={{
            top: top + 8,
            ...pokemonScreenStyles.backButton
          }}
          onPress={() => navigation.pop()}
        >
          <Icon
            name="arrow-back-outline"
            color='white'
            size={30}
          />
        </TouchableOpacity>
        <Text
          style={{
            top: top + 45,
            ...pokemonScreenStyles.pokemonName
          }}
        >
          {name + '\n'}#{id}
        </Text>
        <Image
          source={require('../../assets/pokebola-blanca.png')}
        />
        <FadeInImage
          uri={picture}
          style={{ ...pokemonScreenStyles.pokemonImage }}
        />
      </View>
    </View>
  )
}
