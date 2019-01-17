import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCpLD6LKx1BZ9d_FBIcyEtDctDVjRK6njU",
    authDomain: "firedux-todo-419e4.firebaseapp.com",
    databaseURL: "https://firedux-todo-419e4.firebaseio.com",
    projectId: "firedux-todo-419e4",
    storageBucket: "firedux-todo-419e4.appspot.com",
    messagingSenderId: "948545885428"
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")