import React from 'React'
import PropTypes from 'prop-types'
import {Button, Text} from 'native-base'
import {FontAwesome} from '@expo/vector-icons'

export default class FooterButton extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  inactivate () {
    this.setState({
      isActive: false
    })
  }

  activate () {
    this.setState({
      isActive: true
    })
  }

  render () {
    let iconFont = ''
    let image = ''

    if (this.props.name) {
      iconFont = <FontAwesome
        name={this.props.name}
        size={25}
        color={this.props.isActive || this.state.isActive ? '#000' : 'rgba(0, 0, 0, 0.4)'}
      />
    }

    return (
      <Button
        {...this.props}
        onPress={() => {
          this.props.onPress && this.props.onPress()

          this.setState({
            isActive: true
          })
        }}
        style={this.props.buttonStyle}
      >
        {!!iconFont && iconFont}
        {!!image && image}
        <Text
          style={this.props.labelStyle}
        >
          {this.props.label}
        </Text>
      </Button>
    )
  }
}

FooterButton.propTypes = {
  buttonStyle: PropTypes.object,
  image: PropTypes.number,
  isActive: PropTypes.bool,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  name: PropTypes.string,
  onPress: PropTypes.func.isRequired
}
