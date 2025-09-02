import React from "react";
import { StyleSheet, Text } from "react-native";

interface AgeDisplayProps {
  age: number;
}

export function AgeDisplay({ age }: AgeDisplayProps) {
  return (
    <Text style={styles.ageText}>j'ai {age} ans et je suis à la retraite</Text>
  );
}

const styles = StyleSheet.create({
  ageText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
});
