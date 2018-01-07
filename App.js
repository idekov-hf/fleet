import React, { Component } from 'react'
import RootNavigator from './src/components/RootNavigator'
import './src/utils/authentication/firebase-config.js'

export default class App extends Component {
  render() {
    return <RootNavigator />
  }
}
