import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import { getDatabase, ref, set } from "firebase/database";
import { ref, set, database } from "./config/database";
import { create, signIn } from "./config/auth";

export default function App() {
  // useEffect(() => {
  //   // const id = crypto.randomUUID().toString();
  //   const id = "kWFbpiEH1TM7LX5HJwBhAleP7Kh2";
  //   set(ref(database, `user/admin/${id}`), {
  //     email: "emmanuellesoy@gmail.com",
  //     name: "Juanito",
  //     age: 37,
  //     gender: "male",
  //   });
  // }, []);

  // useEffect(() => {
  //   create("emmanuelle@gmail.com", "q2w3e4r5t6y");
  // }, []);

  useEffect(() => {
    signIn("emmanuelle.laguna@gmail.com", "q2w3e4rsss5t6y");
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
