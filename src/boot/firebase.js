// import something here
import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)
// "async" is optional
export default ({
  Vue
}) => {
  // something to do
const firebaseConfig = {
  apiKey: 'AIzaSyBxW5N9VD3FymVHOFhf3ExruxECU-8sApQ',
  authDomain: 'cekcovid19sulteng.firebaseapp.com',
  databaseURL: 'https://cekcovid19sulteng.firebaseio.com',
  projectId: 'cekcovid19sulteng',
  storageBucket: 'cekcovid19sulteng.appspot.com',
  messagingSenderId: '785154423456',
  appId: '1:785154423456:web:9589920fd41217935867c5',
  measurementId: 'G-FM4EFKV1PX'
}

  firebase.initializeApp(firebaseConfig)
  // firebase.analytics()
  // var db = firebase.firestore()
  Vue.prototype.$firebase = firebase
}
