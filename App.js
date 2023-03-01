import { initializeApp } from "firebase/app";
import AppStackNavigator from "./navigation/AppStackNavigator";

const firebaseConfig = {
  // Firebase config..
};

initializeApp(firebaseConfig);

export default function App() {
  return (
    <AppStackNavigator></AppStackNavigator>
  );
}

