import * as firebase from 'firebase'
import { Facebook } from 'expo'
import keys from './api-keys'

export function emailSignUp(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export async function facebookSignUp() {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(
    keys.facebook,
    {
      permissions: ['public_profile']
    }
  )
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`
    )
    return (await response.json()).name
  }
}
