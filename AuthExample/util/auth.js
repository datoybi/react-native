import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export async function createUser(email, password) {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log(response);
}

export async function login(email, password) {
  const response = await signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
    }
  );
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log(error);
  // });
}
