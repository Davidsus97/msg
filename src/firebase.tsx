import { initializeApp } from "firebase/app";

import { getDatabase, ref, set, get, update,} from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7uvtCPrfR_1rpEUqAPjKdfKCfZuFoblA",
  authDomain: "chat-5afbf.firebaseapp.com",
  projectId: "chat-5afbf",
  storageBucket: "chat-5afbf.appspot.com",
  messagingSenderId: "62634673045",
  appId: "1:62634673045:web:fea6656d123d3fd1d7ac9c",
  measurementId: "G-XJH5168Q6G"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signIn = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      return user.uid;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

export const getData = (path: string) => { // Explicitly specify the type of 'path'
  const myRef = ref(db, path);
  return get(myRef).then((s) => {
    const value = s.val();
    return value;
  });
};

export const setData = (path: string, data: any) => { // Explicitly specify the types of 'path' and 'data'
  return set(ref(db, path), data);
};
