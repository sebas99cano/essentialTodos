import {auth} from "./firebase";

export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
}