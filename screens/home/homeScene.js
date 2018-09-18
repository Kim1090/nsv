import React from 'react'
import { Image, ScrollView, homeStyleheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { Header, Footer, Content } from 'native-base'
import commonStyle from '../../style/commonStyle'

import homeStyle from './homeStyle'
import HomeController from './homeController'
import FooterTabGroup from '../../style/ui/FooterTabGroup'

export default class HomeScreen extends HomeController {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={homeStyle.container}>
        <SafeAreaView style={{flex: 1}}>
        <Header noShadow style={{backgroundColor: 'transparent', borderBottomColor: 'transparent'}}/>
          <View style={commonStyle.containerView}>
            <Text>ตารางกิจกรรมค่าย</Text>
          </View>
          <Footer>
            <FooterTabGroup currentScene={'home'} />
          </Footer>
        </SafeAreaView>
      </View>
    )
  }
}
