// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyDwc9_LJfFAhYS1E8WIXrp4XeD5J6IU7aI',
	authDomain: 'cic-basketball-league.firebaseapp.com',
	projectId: 'cic-basketball-league',
	storageBucket: 'cic-basketball-league.firebasestorage.app',
	messagingSenderId: '980843242915',
	appId: '1:980843242915:web:1326be8d76561b8a38a616',
	measurementId: 'G-M9CK4B3W8E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
