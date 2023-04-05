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
  const dv2 = [
    { code1c: 1, name: "0001" },
    { code1c: 2, name: "0001Проба2" },
    { code1c: 3, name: "0001Проба3" },
    { code1c: 4, name: "0001Проба4" },
    { code1c: 5, name: "0001Проба5" },
  ];

  const [vtext, setText] = useState("");
  const [vtext1, setText1] = useState("");
  const [vtext2, setText2] = useState("");
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
     <View style={styles.touchableContainer}>
        <Text>{vtext1}</Text>
        <Select
          Caption="Выберите для первого"
          data={dv}
          SelectValue={vtext1}
          SetSelectValue={setText1}
        />
      </View>
      <View style={styles.touchableContainer}>
        <Text>{vtext2}</Text>
        <Select
          data={dv2}
          vKey="code1c"
          SelectValue={vtext2}
          SetSelectValue={setText2}
        />
      </View>
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
  touchableContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
