// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native'
import { BottomTabs } from './src/navigation/BottomTabs';

const App = () => {
  return (
    <View style={{ flex: 1, }}>
      <NavigationContainer>
        <BottomTabs/>
      </NavigationContainer>
    </View>
  )
}

export default App;