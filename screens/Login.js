import { Button, View, Text, ActivityIndicator, Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Login = () => {

  const auth = getAuth();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const enter = () => {
    setIsLoading(true);
    const email = "flaviomotamedeiros@gmail.com";
    const password = "senhateste";

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.replace("Home");
      })
      .catch((error) => {
        Alert.alert('Firebase', 'Erro no login!', [
          { text: 'OK', onPress: () => { } },
        ]);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return (
      <ActivityIndicator></ActivityIndicator>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login!</Text>
      <Button title="Entrar" onPress={enter}></Button>
    </View>
  );
}

export default Login;