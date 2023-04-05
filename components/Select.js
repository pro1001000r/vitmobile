import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Select = ({
  SelectValue,
  SetSelectValue,
  Caption = "Выберите из списка ...",
  vKey = "id",
  vValue = "name",
  data = [],
}) => {
  const [visible, setVisible] = useState(false);
  
  const vRenderItem = ({ item }, key, value) => (
    <View>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={() => {
          // console.log("------------");
          //console.log(item);
          //setNomenred(item);
          //setModalVisible(true);
          //navigation.navigate("Main", { nomenFind: item }); //Переносим на главную
          //alert("ok");
          SetSelectValue(item?.[value]);
          setVisible(false);
        }}
      >
        <Text>{item?.[key]}</Text>
        <Text>{item?.[value]}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={() => setVisible(true)}
      >
        {/* <Text style={styles.touchableText}>{SelectValue}</Text> */}
        <Icon name="chevron-right" color={"#555"} size={26} />
      </TouchableOpacity>
      <Modal visible={visible} animationType="slide">
        <SafeAreaView>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Icon name="close" color={"#555"} size={26} />
          </TouchableOpacity>
          <Text>{Caption}</Text>
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => vRenderItem({ item }, vKey, vValue)}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

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
  touchableText: { fontSize: 14, fontWeight: "600" },
});

export default Select;
