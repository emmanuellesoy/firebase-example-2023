import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);

const create = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("crate", userCredential);
    })
    .catch((error) => console.log(error));
};

const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("sign/in", userCredential);
    })
    .catch((error) => console.log(error));
};

export { create, signIn };
