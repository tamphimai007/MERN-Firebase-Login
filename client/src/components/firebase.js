
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBllPfe4UHbnuggDgEzPEajvk5L6ajHgBY",
    authDomain: "loginmern-75b3f.firebaseapp.com",
    projectId: "loginmern-75b3f",
    storageBucket: "loginmern-75b3f.appspot.com",
    messagingSenderId: "774618231021",
    appId: "1:774618231021:web:c7a2bd3789540e11071ce4"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

