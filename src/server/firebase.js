import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC7DlUZXBIUfD7VerOHXCf2DTCQVV9SjdU",
    authDomain: "home-cde4c.firebaseapp.com",
    databaseURL: "https://home-cde4c.firebaseio.com",
    projectId: "home-cde4c",
    storageBucket: "home-cde4c.appspot.com",
    messagingSenderId: "933554746322",
    appId: "1:933554746322:web:9e7ff500c4075711890e0b",
    measurementId: "G-V4MLWRSM4K"
}

export default class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.firestore();
        this.auth = app.auth();
    }

    isInitTheSession(){
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }
}