import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function vMainScreen() {
  const [vtext, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text>Новый модуль</Text>
      <Text>{vtext}</Text>
      <Text>{"\n"}</Text>
      
      <TextInput
        style={styles.text}
        value={vtext}
        onChangeText={setText}
        placeholder="Введите текст"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
