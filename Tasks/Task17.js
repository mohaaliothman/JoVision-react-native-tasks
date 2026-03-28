import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Task16() {
  const [showName, setShowName] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white", marginTop: 50, alignItems: "center" }}>
      
      <Button
        title={showName ? "Hide" : "Show"}
        onPress={() => setShowName(!showName)}
      />


      {showName && (
        <Text style={{ marginTop: 20, fontSize: 18 }}>
          Mohammad Othman
        </Text>
      )}

    </View>
  );
}