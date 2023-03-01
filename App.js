import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, parameters } from "./src/global/styles";
import HomeScreen from "./src/screens/HomeScreen";

const App = () => {
  return (
    <View style={styles.content}>
      <HomeScreen />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
