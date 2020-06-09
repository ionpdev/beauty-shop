import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA2hKd2Ks--Al1Bkck9Uf_ckMGJMJXO1jI",
    authDomain: "beauty-shop-db.firebaseapp.com",
    databaseURL: "https://beauty-shop-db.firebaseio.com",
    projectId: "beauty-shop-db",
    storageBucket: "beauty-shop-db.appspot.com",
    messagingSenderId: "295654181283",
    appId: "1:295654181283:web:a7ab81d080081eb589f216",
    measurementId: "G-86B0W6Z264"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
