import React from 'react'
import {
  Image,
  ScrollView,
  homeStyleheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import homeStyle from './homeStyle'
import HomeController from './homeController'

export default class HomeScreen extends HomeController {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={homeStyle.container}>
        <ScrollView style={homeStyle.container} contentContainerStyle={homeStyle.contentContainer}>

          <View style={homeStyle.getStartedContainer}>

            <Text style={homeStyle.getStartedText}>Get started by opening</Text>

            <Text style={homeStyle.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={homeStyle.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={homeStyle.helpLink}>
              <Text style={homeStyle.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={homeStyle.tabBarInfoContainer}>
          <Text style={homeStyle.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

        </View>
      </View>
    )
  }
}
