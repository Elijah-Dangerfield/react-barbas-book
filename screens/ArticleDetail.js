import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ArticleDetail() {
  return (
    <View style={styles.container}>
      <Text>This is the deets</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
