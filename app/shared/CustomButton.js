import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const CustomButton = ({ title, onPress, color = "tomato" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "tomato",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "90%",
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
