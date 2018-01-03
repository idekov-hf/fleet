import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import containers from './../styles/containers'
import buttons from './../styles/buttons'
import general from './../styles/general'
import facebookLogIn from './../utils/login'

export default class SignUp extends Component {
  state = {
    email: '',
    password: ''
  }
  render() {
    return (
      <View style={[containers.fill, containers.center]}>
        <TouchableOpacity
          onPress={facebookLogIn}
          style={[buttons.standard, buttons.facebook]}
        >
          <FontAwesome
            style={{ flex: 1 }}
            name="facebook-square"
            size={25}
            color="white"
          />
          <Text style={[buttons.text, { flex: 2 }]}>Sign up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[buttons.standard, buttons.google]}>
          <FontAwesome
            style={{ flex: 1 }}
            name="google"
            size={25}
            color="white"
          />
          <Text style={[buttons.text, { flex: 2 }]}>Sign up with Google</Text>
        </TouchableOpacity>

        <Text style={{ alignSelf: 'center', marginTop: 10 }}>(or)</Text>

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
        <TouchableOpacity style={[buttons.standard, buttons.orange]}>
          <Text style={buttons.text}>Sign up with Email</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
