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
    // <ThemedView
    //   style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    // >
    //   <Human />
    //   <ThemedText>Fin de l'écran</ThemedText>
    //   <View style={s.square}>
    //     <Text>Mon carré stylé</Text>
    //   </View>
    // </ThemedView>
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        
        <FlexDemo/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
