import { Image } from "expo-image";
import { Alert, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Child } from "@/components/Child/Child";
import { PlatformDetector } from "@/components/PlatformDetector/PlatformDetector";

export default function HomeScreen() {
    function hello(name: string) {
      Alert.alert("Hello" + name);
    }
  
  return (
    <ParallaxScrollView headerImage={<Image source={require('@/assets/images/partial-react-logo.png')}/>} headerBackgroundColor={{light: '#A1CEDC', dark:'#1D3D47'}}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Détection platforms</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <PlatformDetector/>
      </ThemedView>
    </ParallaxScrollView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
});