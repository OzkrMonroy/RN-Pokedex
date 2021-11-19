import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

export const Loading = ({ styles }: any) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color='gray' size={50} />
      <Text style={{ color: 'gray', top: 10 }}>Loading...</Text>
    </View>
  )
}
