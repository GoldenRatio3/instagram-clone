import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBouUel4yoai6SrPXISFWRPlrHM7MH_V_Q',
	authDomain: 'instagram-clone-d59b0.firebaseapp.com',
	databaseURL: 'https://instagram-clone-d59b0.firebaseio.com',
	projectId: 'instagram-clone-d59b0',
	storageBucket: 'instagram-clone-d59b0.appspot.com',
	messagingSenderId: '918074494843',
	appId: '1:918074494843:web:6a7b9fc2ee72576e0d37de',
	measurementId: 'G-FTKR42GE4V',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
