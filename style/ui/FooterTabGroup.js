import React from 'React'
import {FooterTab} from 'native-base'
import FooterButton from './FooterButton'
import PropTypes from 'prop-types'
import {withNavigation} from 'react-navigation'

class FooterTabGroup extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      buttons: [
        {
          icon: 'feed',
          label: 'Feeds',
          onPress: () => {
            this.navigate('replace', 'Feed')
          }
        },
        {
          icon: 'list-alt',
          label: 'Event',
          onPress: () => {
            this.navigate('replace', 'Event')
          }
        },
        {
          icon: 'gear',
          label: 'Settings',
          onPress: () => {
            this.navigate('replace', 'Setting')
          }
        }
      ]
    }
  }

  inactiveFooterButtons () {
    for (const x in this.refs) {
      this.refs[x].inactivate()
    }
  }

  render () {
    return (
      <FooterTab>
        {
          this.state.buttons.map((button, key) => {
            if (button.label && this.props.currentScene.toLowerCase() === button.label.toLowerCase()) {
              button.isActive = true
            }

            return (
              <FooterButton
                buttonStyle={button.buttonStyle || {}}
                key={key}
                ref={button.icon}
                name={button.icon}
                isActive={button.isActive || false}
                image={button.image || null}
                label={button.label}
                labelStyle={button.labelStyle || {}}
                onPress={() => {
                  button.onPress && button.onPress()
                  this.inactiveFooterButtons()
                }} />
            )
          })
        }
      </FooterTab>
    )
  }
}

FooterTabGroup.propTypes = {
  currentScene: PropTypes.oneOf([
    'home'
  ])
}

export default withNavigation(FooterTabGroup)
