import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("John");
  const [person, setPerson] = useState({ name: "mario", age: 40 });

  const clickHandler = () => {
    setName("Sam");
    setPerson({ name: "Pam", age: 44 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.fontLarge}> My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}{" "}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update State" onPress={clickHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  },
  fontLarge: {
    fontSize: 32,
  },
});
