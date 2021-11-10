import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';
import { globalTheme } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPagineted } from '../hooks/usePokemonPagineted';
import { PokemonCard } from '../components/pokemonCard/PokemonCard';

interface Props extends StackScreenProps<any, any>{}

export const HomeScreen = ({ navigation }: Props) => {
  const { top } = useSafeAreaInsets()
  const { simplePokemonList, loadPokemons } = usePokemonPagineted()

  return (
    <View>
      <Image source={require('../assets/pokebola.png')} style={globalTheme.pokebolaBG}/>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          ListHeaderComponent={(
            <Text 
            style={{ ...globalTheme.title, ...globalTheme.globalMargin, top: top + 20, marginBottom: top+20, paddingBottom: 10}}>
              Pokedex
            </Text>
          )}
          renderItem={({ item }) => (<PokemonCard pokemon={item}/> )}
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
    </View>
  )
}
