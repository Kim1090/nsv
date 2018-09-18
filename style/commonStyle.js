import React from 'react'
import { Dimensions, Platform, StyleSheet } from 'react-native'
import config from '../libs/config'

export default StyleSheet.create({
  flexView: {
    flex: 1,
  },
  backgroundView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerView: {
    flex: 1,
    paddingLeft: config.rowViewPaddingSize,
    paddingRight: config.rowViewPaddingSize,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
  },
  headerBody: {
    flex: 1,
  },
})
