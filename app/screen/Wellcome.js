import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { CustomButton } from "../shared";

export const Wellcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/wellcome.jpg")}
      style={styles.background}>
      <View style={styles.text}>
        <Text style={styles.firstText}>Wellcome to my app</Text>
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <CustomButton
          title="Login"
          onPress={() => navigation.navigate("Login")}
          color="#20295B"
        />
        <CustomButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
          color="#08342E"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: Constants.statusBarHeight,
  },
  text: {
    alignItems: "center",
  },
  firstText: {
    color: "#BCA900",
    fontSize: 35,
  },
});
