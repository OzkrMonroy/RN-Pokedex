import React, { useEffect, useState } from 'react'
import { Platform, StyleProp, TextInput, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebauncedValue } from '../../hooks/useDebauncedValue'
import { searchInputStyles } from './searchInputStyles'

interface Props {
  onDebaunce: (value: string) => void,
  style?: StyleProp<ViewStyle>
}

export const SearchInput = ({ style, onDebaunce }: Props) => {
  const [textValue, setTextValue] = useState('')
  const debauncedValue = useDebauncedValue(textValue)

  useEffect(() => {
    onDebaunce(debauncedValue)
  }, [debauncedValue])

  return (
    <View style={{...searchInputStyles.container, ...style as any}}>
      <View style={searchInputStyles.textBackground}>
        <TextInput
          placeholder='Search pokemon'
          style={{...searchInputStyles.textInput, top: Platform.OS === 'android' ? 2 : 0, color: 'gray'}}
          autoCapitalize='none'
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name='search-outline' color='gray' size={30}/>
      </View>
    </View>
  )
}
