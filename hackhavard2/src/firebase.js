import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJI5DaQrQCALhpCjhJ0qQTwE8SHtdBde0",
  authDomain: "hack22-recipie-magic.firebaseapp.com",
  projectId: "hack22-recipie-magic",
  storageBucket: "hack22-recipie-magic.appspot.com",
  messagingSenderId: "979812257518",
  appId: "1:979812257518:web:246bdd86cef0ea532badff",
  measurementId: "G-1LRBGG2DWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)

const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return {"success": "success"}
    } catch (err) {
      return {err}
    }
  };

const register = async (name, email, password, access_code, pronouns) => {
    try {
      pronouns = pronouns || ""; //otherwise will show as undefined
      const accessCodeQuery = await getDocs(collection(db, "access_codes"));
      let access_code_exists = false;
      let role = "";
      let school = "";
      await Promise.all(
        accessCodeQuery.docs.map(async (accessCodeDoc) => {
          const accessCodeData = await accessCodeDoc.data();
          
          if (access_code === accessCodeData.code) {
            access_code_exists = true;
  
            role = accessCodeData.role;
            school = accessCodeData.school;
            return;
          }
        })
      );
      if (!access_code_exists) {
        throw new Error("auth/invalid-action-code");
      } else {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        const docRef = await addDoc(collection(db, "users"), {
          uid: user.uid,
          name,
          email,
          pronouns,
          role,
          school,
        });
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (err) {
      console.error(err);
    }
};