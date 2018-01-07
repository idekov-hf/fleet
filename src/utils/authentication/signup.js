import * as firebase from 'firebase'
import './firebase-config'

export function emailSignUp(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}
