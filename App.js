import { initializeApp } from "firebase/app";
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

initializeApp(firebaseConfig);

export default function App() {
  return (
    <AppStackNavigator></AppStackNavigator>
  );
}

