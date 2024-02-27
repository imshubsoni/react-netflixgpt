import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { USER_AVATAR } from "../utils/constants";

export const ValidateUserAuthentication = async (
  isSignIn,
  email,
  password,
  fullname
) => {
  var errMsg = "";
  if (!isSignIn) {
    // SIGN UP USER
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        // Update User Information
        updateProfile(auth.currentUser, {
          displayName: fullname,
          photoURL: USER_AVATAR,
        })
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            errMsg = errorCode + " -- " + errorMessage;
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorCode + " -- " + errorMessage;
      });
  } else {
    // SIGN IN USER
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
      })
      .catch((error) => {
        debugger;
        const errorCode = error.code;
        const errorMessage = error.message;
        errMsg = errorCode + " -- " + errorMessage;
      });
  }

  return errMsg;
};
