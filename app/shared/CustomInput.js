import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CustomInput({
  name = "email",
  onChange,
  placeholder,
  autoComplete = null,
  keyboardType = "email-address",
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#3D8C40"
        autoComplete={autoComplete}
        autoCorrect={false}
        keyboardType={keyboardType}
        style={styles.textInput}
        onChangeText={onChange}
      />
      <MaterialCommunityIcons
        name={name}
        size={30}
        color="#3D8C40"
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    width: "80%",
    height: 60,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    fonstSize: 25,
  },
  textInput: {
    fonstSize: 25,
    marginLeft: 15,
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
});
