import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AgeDisplay } from "./AgeDisplay";

export function AgeCounter() {
    const [age, setAge] = useState(28);

    function increaseAge() {
        setAge(age + 1);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={increaseAge} style={styles.button}>
                <Text style={styles.buttonText}>Augmenter</Text>
            </TouchableOpacity>
            <AgeDisplay age={age} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  ageText: {
    fontSize: 18,
    color: "#333",
  },
});