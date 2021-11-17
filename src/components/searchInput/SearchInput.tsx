import React from 'react'
import { Platform, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { searchInputStyles } from './searchInputStyles'

export const SearchInput = () => {
  return (
    <View style={searchInputStyles.container}>
      <View style={searchInputStyles.textBackground}>
        <TextInput
          placeholder='Search pokemon'
          style={{...searchInputStyles.textInput, top: Platform.OS === 'android' ? 2 : 0, color: 'gray'}}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Icon name='search-outline' color='gray' size={30}/>
      </View>
    </View>
  )
}
