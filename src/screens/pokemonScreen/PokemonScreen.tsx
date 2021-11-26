import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { ActivityIndicator, Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../../navigation/Tab1Navigation'
import { pokemonScreenStyles } from './pokemonScreenStyles'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FadeInImage } from '../../components/FadeInImage'
import { usePokemon } from '../../hooks/usePokemon'
import { PokemonDetails } from '../../components/pokemonDetails/PokemonDetails'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{}

export const PokemonScreen = ({ navigation, route } : Props) => {
  const { top } = useSafeAreaInsets()
  const { pokemon, color } = route.params

  const { name, id, picture } = pokemon
  const { isLoading, pokemon: pokemonFull } = usePokemon(id)

  return (
    <View style={{ flex: 1 }}>
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
          style={{ ...pokemonScreenStyles.pokeball }}
        />
        <FadeInImage
          uri={picture}
          style={{ ...pokemonScreenStyles.pokemonImage }}
        />
      </View>
      { isLoading ? (
        <View style={{ ...pokemonScreenStyles.loadingIndicator }}>
          <ActivityIndicator
            color={color}
            size={50}
          />
        </View>

      ) : (
        <PokemonDetails pokemon={pokemonFull}/>
      ) }
    </View>
  )
}
