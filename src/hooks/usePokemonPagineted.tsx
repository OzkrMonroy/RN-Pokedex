import { useEffect, useRef } from "react";
import { pokemonApi } from "../api/pokemonApi"

export const usePokemonPagineted = () => {
  const nextUrlPage = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

  const getPokemons = async () => {
    const resp = pokemonApi.get(nextUrlPage.current);

  }

  useEffect(() => {
    getPokemons()
  }, [])
}
