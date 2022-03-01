const firebaseConfig = {
	apiKey: "AIzaSyCbF1_aZXwTBwQ0MkHPFjD41YmLVqJy-34",
	authDomain: "daxoppgave-b5c88.firebaseapp.com",
	projectId: "daxoppgave-b5c88",
	storageBucket: "daxoppgave-b5c88.appspot.com",
	messagingSenderId: "1079544557096",
	appId: "1:1079544557096:web:e2e93f08f22354649bcf1d"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();