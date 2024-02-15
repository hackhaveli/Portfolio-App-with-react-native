import { Platform,SafeAreaView,StatusBar,View } from 'react-native'
import React from 'react'

const SafeAreaViewAndroid = ({Component,...rest}) => {
  return (
    <View style={{paddingTop:Platform.OS ==='android' ? StatusBar.currentHeight:0,}}>
        <Component {...rest}/>
   
    </View>
  )
}

export default SafeAreaViewAndroid