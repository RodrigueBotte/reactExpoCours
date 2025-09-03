import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

interface ChildProps{
    onPress: (name: string) => void;
}

export function Child({ onPress }: ChildProps) {
    function onPress_() {
        onPress(" les devs");
    }
    return (
        <TouchableOpacity style={styles.button} onPress={onPress_}>
            <Text style={styles.buttonText}>Cliquez ici</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});