import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PokemonFull } from '../../interfaces/pokemonInterfaces';
import { FadeInImage } from '../FadeInImage';
import { pokemonDetailsStyles } from './pokemonDetailsStyles';

interface Props {
  pokemon: PokemonFull
}

export const PokemonDetails = ({ pokemon }:Props) => {
  const { abilities, moves, stats } = pokemon

  return (
    <ScrollView style={{ ...StyleSheet.absoluteFillObject }} showsVerticalScrollIndicator={false}>
      <View style={{ ...pokemonDetailsStyles.container, marginTop: 370 }}>
        <Text style={ pokemonDetailsStyles.title }>Types</Text>
        <View style={{ flexDirection: 'row' }}>
          { pokemon.types.map(({ type }) => (
            <Text key={type.name} style={{...pokemonDetailsStyles.regularText, marginRight: 8}}>{type.name}</Text>
          ))}
        </View>
        <Text style={ pokemonDetailsStyles.title }>Peso</Text>
        <Text style={ pokemonDetailsStyles.regularText }>{pokemon.weight}kg.</Text>
      </View>
      <View style={{ ...pokemonDetailsStyles.container}}>
        <Text style={ pokemonDetailsStyles.title }>Sprites</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FadeInImage uri={pokemon.sprites.front_default} style={pokemonDetailsStyles.basicSprite}/>
        <FadeInImage uri={pokemon.sprites.back_default} style={pokemonDetailsStyles.basicSprite}/>
        <FadeInImage uri={pokemon.sprites.front_shiny} style={pokemonDetailsStyles.basicSprite}/>
        <FadeInImage uri={pokemon.sprites.back_shiny} style={pokemonDetailsStyles.basicSprite}/>
      </ScrollView>
      <View style={{ ...pokemonDetailsStyles.container}}>
        <Text style={ pokemonDetailsStyles.title }>Habilidades base</Text>
        <View style={{ flexDirection: 'row' }}>
          { abilities.map(({ ability }) => (
            <Text key={ability.name} style={{...pokemonDetailsStyles.regularText, marginRight: 8}}>{ability.name}</Text>
          ))}
        </View>
      </View>
      <View style={{ ...pokemonDetailsStyles.container}}>
        <Text style={ pokemonDetailsStyles.title }>Movimientos</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          { moves.map(({ move }) => (
            <Text key={move.name} style={{...pokemonDetailsStyles.regularText, marginRight: 8}}>{move.name}</Text>
          ))}
        </View>
      </View>
      <View style={{ ...pokemonDetailsStyles.container}}>
        <Text style={ pokemonDetailsStyles.title }>Stats</Text>
        <View>
          { stats.map((stat, i) => (
            <View key={stat.stat.name + i} style={{ flexDirection: 'row'}}>
              <Text style={{...pokemonDetailsStyles.regularText, marginRight: 8, width: 200}}>{stat.stat.name}</Text>
              <Text style={{...pokemonDetailsStyles.regularText, marginRight: 8, fontWeight: 'bold', color: 'black'}}>{stat.base_stat}</Text>
            </View>
          ))}
        </View>
        <View style={{
          marginBottom: 20,
          alignItems: 'center'
        }}>
          <FadeInImage uri={pokemon.sprites.front_default} style={pokemonDetailsStyles.basicSprite}/>
        </View>
      </View>
    </ScrollView>
  )
}
