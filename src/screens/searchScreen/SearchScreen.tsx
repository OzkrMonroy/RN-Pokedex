import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Platform, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Loading } from '../../components/loading/Loading'
import { PokemonCard } from '../../components/pokemonCard/PokemonCard'
import { SearchInput } from '../../components/searchInput/SearchInput'
import { usePokemonSearch } from '../../hooks/usePokemonSearch'
import { globalTheme } from '../../theme/appTheme'
import { searchScreenStyles } from './searchScreenStyles'
import { SimplePokemon } from '../../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets()
  const { isFetching, simplePokemonList } = usePokemonSearch()
  const [term, setTerm] = useState('')
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])

  useEffect(() => {
    if (term.length === 0) return setPokemonFiltered([])

    if(isNaN(Number(term))){
      setPokemonFiltered(simplePokemonList.filter(poke => poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())))
    }else {
      const pokemonById = simplePokemonList.find(poke => poke.id == term)
      setPokemonFiltered(pokemonById ? [pokemonById]: [])
    }
  }, [term])

  if (isFetching) {
    return <Loading style={searchScreenStyles} />
  }

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20
      }}
    >
      <SearchInput
        onDebaunce={(value) => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          marginTop: (Platform.OS === 'ios') ? top : top + 20
        }}

      />
      <FlatList
        data={pokemonFiltered}
        keyExtractor={(pokemon) => pokemon.id}
        ListHeaderComponent={(
          <Text
            style={{ ...globalTheme.title, ...globalTheme.globalMargin, marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80, marginBottom: 20, paddingBottom: 10 }}>
            {term}
          </Text>
        )}
        renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
