import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AppStackNavigator from "./navigation/AppStackNavigator";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_eymojjkh5TqjfxOQxJtihCIXu8-DSIQ",
  authDomain: "hello-world-8bde8.firebaseapp.com",
  projectId: "hello-world-8bde8",
  storageBucket: "hello-world-8bde8.appspot.com",
  messagingSenderId: "392606599624",
  appId: "1:392606599624:web:dd71880f623750de6b98fd"
};

const app = initializeApp(firebaseConfig);

export default function App() {
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const navigation = useNavigation();

  // listen for changes in the authentication state of a user
  onAuthStateChanged(auth, (user) => {      
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log('User is signed in!');
      navigation.replace("Home");
    } else {
      // User is signed out
      console.log('User is signed out!');
      navigation.replace("Login");
    }
  })

  return (
    <AppStackNavigator></AppStackNavigator>
  );
}

