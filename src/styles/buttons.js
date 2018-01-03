import { StyleSheet } from 'react-native'
import { orange, blue, facebookBlue, googleBlue } from './colors'

const buttons = StyleSheet.create({
  standard: {
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 60,
    marginTop: 10
  },
  orange: {
    backgroundColor: orange
  },
  blue: {
    backgroundColor: blue
  },
  facebook: {
    backgroundColor: facebookBlue,
    flexDirection: 'row'
  },
  google: {
    backgroundColor: googleBlue,
    flexDirection: 'row'
  },
  text: {
    color: 'white'
  }
})

export default buttons
