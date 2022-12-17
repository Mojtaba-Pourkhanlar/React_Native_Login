import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Constants from "expo-constants";
import { CustomButton, decodeToken } from "../shared";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";

export const Wellcome = ({ navigation }) => {
  const fetchUser = async () => {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("userId");
    const token = await AsyncStorage.getItem("token");
    const userId = JSON.parse(await AsyncStorage.getItem("userId"));
    if (token !== null && userId !== null) {
      const decodedToken = decodeToken(token);

      if (decodedToken.user.userId === userId)
        navigation.dispatch(StackActions.replace("Home"));
      else {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("userId");
        navigation.navigate("Login");
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
