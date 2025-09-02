import { Image } from "expo-image";
import { Platform, StyleSheet, Text } from "react-native";
import { s } from "../../App.styles";
import { FlexDemo } from "../../components/Flexdemo";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Human from "@/components/Human/Human";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Human firstName="Pierre" name="Defauquet" age={28}></Human>
        <Image
          style={{ height: 200, width: 200 }}
          source={{
            uri: "https://www.assuropoil.fr/wp-content/uploads/berger-australien.jpg",
          }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
