import React from 'React'
import { StyleProvider } from 'native-base'

import getTheme from '../theme/components'
import vars from '../theme/variables/commonColor'

export default class Scene extends React.Component {
  render () {
    return (
      <StyleProvider style={getTheme(vars)}>
        {this.props.children || null}
      </StyleProvider>
    )
  }
}
