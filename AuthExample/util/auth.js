import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export async function createUser(email, password) {
  const response = await createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const token = userCredential._tokenResponse.idToken;
      return token;
    }
  );
  console.log(response);
  return response;
}

export async function login(email, password) {
  const response = await signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const token = userCredential._tokenResponse.idToken;
      return token;
    }
  );
  return response;
}
