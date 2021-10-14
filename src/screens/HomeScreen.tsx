import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Image, Text, View } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';
import { globalTheme } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPagineted } from '../hooks/usePokemonPagineted';

interface Props extends StackScreenProps<any, any>{}

export const HomeScreen = ({ navigation }: Props) => {
  const { top } = useSafeAreaInsets()
  usePokemonPagineted()

  return (
    <View>
      <Image source={require('../assets/pokebola')} style={globalTheme.pokebolaBG}/>
      <Text style={{ ...globalTheme.title, ...globalTheme.globalMargin, top: top + 20 }}>Pokedex</Text>
    </View>
  )
}
