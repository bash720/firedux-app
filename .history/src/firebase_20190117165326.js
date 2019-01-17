import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC4uXBJ1sYL4s-tsoWmjIm02bfUANfe71U",
    authDomain: "fir-learning-87b43.firebaseapp.com",
    databaseURL: "https://fir-learning-87b43.firebaseio.com",
    projectId: "fir-learning-87b43",
    storageBucket: "fir-learning-87b43.appspot.com",
    messagingSenderId: "926254216714"
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")