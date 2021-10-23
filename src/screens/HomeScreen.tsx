import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { ActivityIndicator, Button, FlatList, Image, Text, View } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';
import { globalTheme } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPagineted } from '../hooks/usePokemonPagineted';
import { FadeInImage } from '../components/FadeInImage';

interface Props extends StackScreenProps<any, any>{}

export const HomeScreen = ({ navigation }: Props) => {
  const { top } = useSafeAreaInsets()
  const { simplePokemonList, loadPokemons } = usePokemonPagineted()

  return (
    <View>
      <Image source={require('../assets/pokebola')} style={globalTheme.pokebolaBG}/>
      <Text style={{ ...globalTheme.title, ...globalTheme.globalMargin, top: top + 20 }}>Pokedex</Text>
      <FlatList
        data={simplePokemonList}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({ item }) => (
          <FadeInImage
            uri={item.picture}
            style={{ width: 100, height: 100 }}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        onEndReached={ loadPokemons }
        onEndReachedThreshold={ 0.4 }
        ListFooterComponent={(
          <ActivityIndicator 
            style={{ height: 100 }}
            size={20}
            color='gray'
          />
        )}
      />
    </View>
  )
}
