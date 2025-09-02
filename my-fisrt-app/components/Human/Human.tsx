import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

export default function Human() {
    const colorScheme = useColorScheme();

    return (
        <View style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
            <Text style={[styles.text, { color: Colors[colorScheme ?? 'light'].text }]}>
                Je suis un humain!
            </Text>
            <Text style={[styles.description, {color: Colors[colorScheme?? 'light'].text}]}>
                Ceci est mon premier composant personanlisé
            </Text>
        </View>
    )
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