import * as firebase from 'firebase'
import keys from './api-keys'

// Initialize Firebase
const firebaseConfig = {
  apiKey: keys.firebase,
  authDomain: 'fleet-a2062.firebaseapp.com',
  databaseURL: 'https://fleet-a2062.firebaseio.com/',
  storageBucket: 'fleet-a2062.appspot.com'
}

firebase.initializeApp(firebaseConfig)
