import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import general from './../styles/general'
import containers from './../styles/containers'
import buttons from './../styles/buttons'

export default class LogIn extends Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <View style={[containers.fill, containers.center]}>
        <Text style={{ alignSelf: 'center' }}>Welcome Back!</Text>

        <TextInput
          style={general.input}
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
          placeholder="Email"
        />
        <TextInput
          style={general.input}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
          placeholder="Password"
        />

        <TouchableOpacity style={[buttons.standard, buttons.blue]}>
          <Text style={buttons.text}>LOG IN</Text>
        </TouchableOpacity>

        <Image
          source={require('./../../public/images/logo.png')}
          style={{ width: 191, height: 60, marginTop: 20, alignSelf: 'center' }}
        />
      </View>
    )
  }
}
