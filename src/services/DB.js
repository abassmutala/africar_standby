import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const getCarMakes = async () => {
  let data;
  const makesCollectionRef = collection(db, "makes");
  const q = query(makesCollectionRef); //, where("capital", "==", true)
  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      data = doc.data();
      return data;
    });
  } catch (error) {
    alert(error.message);
  }
};

export const getUserData =
  async ({ uid }) => {
    let userData = null;
    const docRef = doc(db, "users", uid);
    const response = await getDoc(docRef);
    if (response.exists) {
      userData = {
        id: response.id,
        ...response.data(),
      };
    }
    // dispatch(setActiveUser({ userData }));
    // return state().userAuth.userData;
  };

export const createProfile = async (uid, profileData) => {
  const profileDocRef = doc(db, "users", uid);
  try {
    await setDoc(profileDocRef, profileData);
  } catch (error) {
    alert(error.message);
  }
};

export const createHostProfile = async (uid, profileData) => {
  const hostProfileRef = doc(db, "hosts", uid);
  try {
    await setDoc(hostProfileRef, profileData);
  } catch (error) {
    alert(error.message);
  }
};

export const addCar = async (hostId, carData) => {
  const hostCarCollection = collection(db, `hosts/${hostId}/cars`);
  try {
    await addDoc(hostCarCollection, carData);
  } catch (error) {
    alert(error.message);
  }
};
