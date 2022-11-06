import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createHostProfile, createProfile } from "./DB";

// export const setAuthListener = () => (dispatch) => {
//   auth.onAuthStateChanged((authUser) => {
//     if (authUser != null) {
//       dispatch(
//         setActiveUser({
//           uid: authUser.uid,
//           email: authUser.email,
//           name: authUser.displayName,
//         })
//       );
//     } else {
//       dispatch(setNullUser());
//     }
//   });
  
  // onAuthStateChanged(auth, (user) => {
  //   if (user && !state().userCredential.initialised) {
  //     dispatch(setSignInState({ user: auth.currentUser.toJSON() }));
  //     dispatch(getUserData(auth.currentUser.uid));
  //   }
  //   !state().userCredential.initialised && dispatch(setInitialised(true));
  // });

//   auth.onAuthStateChanged((authUser) => {
//     if (authUser != null) {
//       dispatch(
//         setActiveUser({
//           uid: authUser.uid,
//           email: authUser.email,
//           name: authUser.displayName,
//         })
//       );
//     } else {
//       dispatch(setNullUser());
//     }
//   });
// };

export const createAccount = async (firstname, lastname, email, password) => {
  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credential.user;
    //   getUserData(user.uid);
    const profileData = {
      uid: user.uid,
      date_joined: user.metadata.creationTime,
      email: user.email,
      firstname: firstname,
      surname: lastname,
      profile_picture: null,
      // sex: null,
    };
    await createProfile(user.uid, profileData);
    await updateProfile(user, { displayName: `${firstname} ${lastname}` });
    return user;
  } catch (error) {
    alert(error.message);
  }
};

export const createHostAccount = async (name, email, phone, password) => {
  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const host = credential.user;
    const hostProfileData = {
      uid: host.uid,
      date_joined: host.metadata.creationTime,
      email: host.email,
      name: name,
      phone: phone,
      profile_picture: null,
      // sex: null,
    };
    await createHostProfile(host.uid, hostProfileData);
    await updateProfile(host, { displayName: `${name}` });
    return host;
  } catch (error) {
    alert(error.message);
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    return error;
  }
};

export const onCaptchaVerify = (phoneNumber) => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: (response) => {
        console.log(response);
        signInWithPhone(phoneNumber);
      },
      // "expired-callback": () => {
      //   // Response expired. Ask user to solve reCAPTCHA again.
      //   // ...
      // },
    },
    auth
  );
};

export const signInWithPhone = async (phoneNumber) => {
  // let appVerifier = RecaptchaVerifier("recaptcha_container"); //new firebase.auth.RecaptchaVerifier('recaptcha-container');
  const appVerifier = window.recaptchaVerifier;
  // window.recaptchaVerifier = new RecaptchaVerifier('recaptcha_container', {}, auth);
  try {
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
    window.confirmationResult = confirmationResult;
  } catch (error) {
    return;
  }
};

export const validateOTP = async (otp) => {
  window.confirmationResult
    .confirm(otp)
    .then((result) => {
      const user = result.user;
      alert("verification complete");
    })
    .catch((error) => {
      return error;
    });
};

export const logOut = async () => {
  try {
    await signOut(auth);
    //dispatch(setNullUser());
  } catch (error) {
    return error;
  }
};

// export const verifyEmail = async (user) => {
//   await sendEmailVerification(user, )
// };
