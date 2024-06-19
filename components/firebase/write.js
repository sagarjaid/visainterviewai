// Some other file where you want to write data

import { db, collection, setDoc, doc, serverTimestamp } from "./firebase";

export const addUser = async (userData) => {
  try {
    const usersRef = collection(db, "user"); // Reference to the "users" collection
    const { uid, ...userDataWithoutUid } = userData; // Extract the 'uid' from the user data

    // Include the 'createdTimeStamp' field with the server timestamp in the userData
    const userDataWithTimestamp = {
      ...userDataWithoutUid,
      createdTimeStamp: serverTimestamp(),
      updatedTimeStamp: serverTimestamp(),
    };

    // Construct a DocumentReference using the doc function with usersRef and the uid
    const userDocRef = doc(usersRef, uid);

    // Use setDoc to set the document with the 'uid' as the document ID and the updated userData
    await setDoc(userDocRef, userDataWithTimestamp);

    console.log("User data added successfully!");
    return true;
  } catch (error) {
    console.error("Error adding user data: ", error);
    return false;
  }
};
