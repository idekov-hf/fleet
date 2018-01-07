import * as firebase from 'firebase'
import './firebase-config'

export function emailSignup(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}
