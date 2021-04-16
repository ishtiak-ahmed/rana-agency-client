import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
if (!firebase.app.length) {
}

export const googleLogin = () => {
    console.log('loging with google');
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user;
            return user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
            return errorMessage;
            // ...
        });
}
