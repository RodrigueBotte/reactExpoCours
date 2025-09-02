import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, Image } from "react-native";

interface HumanProps{
  firstName: string,
  name: string,
  age: number
}

export default function Human({firstName, name, age}: HumanProps) {

    return (
      <>
        <Text style={{ color: "white" }}>
          Mon prénom est {firstName} et mon nom est {name}, j'ai {age} ans.
        </Text>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    opacity: 0.7,
  },
});