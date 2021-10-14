// import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native'
import { StackNavigation } from './src/navigation/StackNavigation';

const App = () => {
  return (
    <View style={{ flex: 1, }}>
      <StackNavigation/>
    </View>
  )
}

export default App;