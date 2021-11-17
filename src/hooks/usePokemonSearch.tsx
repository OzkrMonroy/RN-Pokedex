import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginetedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  const getPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPaginetedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');

    mapPokemonList(resp.data.results);
  }

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split('/')
      const id = urlParts[urlParts.length -2]
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

      return { id, name, picture }
    })

    setSimplePokemonList(newPokemonList)
    setIsFetching(false)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return {
    isFetching,
    simplePokemonList,
  }
}
