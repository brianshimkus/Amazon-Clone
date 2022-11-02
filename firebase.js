import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyBLG2jEyB9hzA91zajYq8yRAK6Lz3hph4g',
	authDomain: 'clone-9b380.firebaseapp.com',
	projectId: 'clone-9b380',
	storageBucket: 'clone-9b380.appspot.com',
	messagingSenderId: '620989054076',
	appId: '1:620989054076:web:9aca0955aefdf480deddf9',
	measurementId: 'G-CQ2C85WW58',
}

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app()

const db = app.firestore()

export default db
