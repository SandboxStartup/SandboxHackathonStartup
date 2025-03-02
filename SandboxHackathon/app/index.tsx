import { Text, View, StyleSheet, Button, Alert } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> {/* ✅ Wrap everything */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text>Edit app/index.tsx to edit this screen.</Text>
          <Button title="Increment Count" onPress={() => setCount(count + 1)} />
          <Button title="Decrement Count" onPress={() => setCount(count - 1)} />
          <View style={{ height: 200 }} />
          <Text>Count: {count}</Text>

        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

function onPress() {
  Alert.alert("Button Pressed!");

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
