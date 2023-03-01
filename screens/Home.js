import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { Button, View, Text } from "react-native";

const Home = () => {

  const auth = getAuth();
  const navigation = useNavigation();

  const signOut = () => {
    auth.signOut();
    navigation.replace("Login");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button title="Sair" onPress={signOut}></Button>
    </View>
  );
}

export default Home;