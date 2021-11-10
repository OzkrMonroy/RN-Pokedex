import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { SimplePokemon } from '../../interfaces/pokemonInterfaces';
import { cardStyles } from './pokemonCardStyles';
import { FadeInImage } from '../FadeInImage';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width

interface Props {
  pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
  const [bgColor, setBgColor] = useState('gray')
  const isMounted = useRef(true)
  const navigation = useNavigation<any>()

  useEffect(() => {
    const getBackgroundColor = async () => {
      const result = await ImageColors.getColors(pokemon.picture, {
        fallback: 'gray',
        cache: true,
        key: 'unique_key',
      })

      let newBgColor = 'gray';

      switch (result.platform) {
        case 'android':
          console.log(result.dominant)
          newBgColor = (result.dominant || 'gray')
          break
        case 'ios':
          newBgColor = result.background
          break
        default:
          newBgColor = 'gray'
      }
      if(isMounted){
        setBgColor(newBgColor)
      }
    }
    getBackgroundColor()

    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('PokemonScreen', { pokemon, color: bgColor })}>
      <View
        style={{...cardStyles.cardContainer, width: windowWidth * 0.4, backgroundColor: bgColor}}
      >
        <View>
          <Text style={{ ...cardStyles.cardTitle }}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={{ ...cardStyles.cardIconBackgroundContainer }}>
          <Image
            source={require('../../assets/pokebola-blanca.png')}
            style={{ ...cardStyles.cardIconBackground }}
          />
        </View>
        <FadeInImage
            uri={pokemon.picture}
            style={{ ...cardStyles.cardImage }}
          />
      </View>
    </TouchableOpacity>
  )
}
