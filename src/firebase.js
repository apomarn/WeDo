import firebase from 'firebase/app'
import 'firebase/auth'

var config = {
  apiKey: 'AIzaSyD4irDt6Owb9EqM2P5-rjSGV5KOQjUd_kw',
  authDomain: 'wedo-4bb21.firebaseapp.com',
  databaseURL: 'https://wedo-4bb21.firebaseio.com',
  projectId: 'wedo-4bb21',
  storageBucket: 'wedo-4bb21.appspot.com',
  messagingSenderId: '64138106796',
  appId: '1:64138106796:web:85728514bd9eaef8'
}

export default firebase.initializeApp(config)
