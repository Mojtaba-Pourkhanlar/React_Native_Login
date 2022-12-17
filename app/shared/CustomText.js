import React from "react";
import { Text } from "react-native";

export default function CustomText({
  size = 1,
  fontFamily,
  styles,
  children,
  color = "#000",
}) {
  return (
    <Text style={[{ fontFamily, fontSize: size, color }, styles]}>
      {children}
    </Text>
  );
}
