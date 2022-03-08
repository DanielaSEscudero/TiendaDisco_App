import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBqca_nPFIfLD99EZCGhnrl3e6UIf_blLY",
    authDomain: "tienda-app-827a6.firebaseapp.com",
    projectId: "tienda-app-827a6",
    storageBucket: "tienda-app-827a6.appspot.com",
    messagingSenderId: "634533947577",
    appId: "1:634533947577:web:323e55255d75a51fcad368"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}