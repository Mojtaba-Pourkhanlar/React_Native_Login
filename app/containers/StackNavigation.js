import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Wellcome } from "../screen/Wellcome";
import { RegisterScreen } from "../screen/RegisterScreen";
import { LoginScreen } from "../screen/LoginScreen";


const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wellcome"
        component={Wellcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{ successRegister: false }}
        options={{
          title: "Login",
          headerStyle: {
            backgroundColor: "#434343",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: "Register",
          headerStyle: {
            backgroundColor: "#434343",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};
