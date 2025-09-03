import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export function PlatformDetector() {
    return (
        <View style={styles.container}>
            {Platform.OS === "ios" ? (
                <Text style={styles.iosText}>Hello sur IOS</Text>
            ) : (
                    <Text style={styles.androidText}>Hello sur Android</Text>
            )}

            <Text style={styles.infoText}>
                Platforme Détectée: {Platform.OS}
            </Text>

            <Text style={styles.versionText}>
                Version: {Platform.Version}
            </Text>

            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    ...Platform.select({
      android: {
        backgroundColor: "green",
      },
      ios: {
        backgroundColor: "red",
      },
      default: {
        // other platforms, web for example
        backgroundColor: "blue",
      },
    }),
  },
  iosText: {
    fontSize: 24,
    color: "#007AFF",
    fontWeight: "bold",
    marginBottom: 10,
  },
  androidText: {
    fontSize: 24,
    color: "#4CAF50",
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
  },
  versionText: {
    fontSize: 14,
    color: "#999",
    marginTop: 5,
  },
});
