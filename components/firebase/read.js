// Some other file where you want to read a specific user document
import { db, getDoc, doc } from "./firebase";

export const getUserById = async (userId) => {
  try {
    const userRef = doc(db, "user", userId); // Reference to the specific user document
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      const user = { id: userSnapshot.id, ...userSnapshot.data() };
      console.log("User: ", user);
      return user;
    } else {
      console.log("User not found.");
      return null;
    }
  } catch (error) {
    console.log("Error getting user: ", error);
    return null;
  }
}