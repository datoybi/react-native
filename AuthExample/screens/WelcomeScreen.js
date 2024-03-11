import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "message/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setFetchedMessage(data);
    });
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
