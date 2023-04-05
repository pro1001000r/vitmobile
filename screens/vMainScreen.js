import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Select from "../components/Select";

export default function vMainScreen() {
  const dv = [
    { id: 1, name: "Проба" },
    { id: 2, name: "Проба2" },
    { id: 3, name: "Проба3" },
    { id: 4, name: "Проба4" },
    { id: 5, name: "Проба5" },
  ];

  const [vtext, setText] = useState("");
  const [vtext1, setText1] = useState("");
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
      <Select
        Caption="Выберите из списка..."
        data={dv}
        SelectValue={vtext1}
        SetSelectValue={setText1}
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
