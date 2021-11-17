import React from 'react'
import { ActivityIndicator, FlatList, Platform, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PokemonCard } from '../../components/pokemonCard/PokemonCard'
import { SearchInput } from '../../components/searchInput/SearchInput'
import { usePokemonSearch } from '../../hooks/usePokemonSearch'
import { globalTheme } from '../../theme/appTheme'
import { searchScreenStyles } from './searchScreenStyles'

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets()
  const { isFetching, simplePokemonList } = usePokemonSearch()

  if(isFetching){
    return (
      <View style={searchScreenStyles.loadingContainer}>
        <ActivityIndicator color='gray' size={50}/>
        <Text style={{ color: 'gray', top: 10 }}>Loading...</Text>
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS === 'android' ? top + 20 : top,
        marginHorizontal: 20
      }}
    >
      <SearchInput/>
      <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          ListHeaderComponent={(
            <Text 
            style={{ ...globalTheme.title, ...globalTheme.globalMargin, top: 20, marginBottom: 20, paddingBottom: 10}}>
              Pokedex
            </Text>
          )}
          renderItem={({ item }) => (<PokemonCard pokemon={item}/> )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
    </View>
  )
}
