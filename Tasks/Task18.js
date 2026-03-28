import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: "white" }]}>
        <ActivityIndicator size="large" />
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.container, { backgroundColor: "white" }]}>
        <Text style={styles.text}>Mohammad Othman</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
});