import React from "react";
import { Text } from "react-native";

export default function CustomText({
  size = 20,
  fontFamily,
  styles,
  color = "#F32314",
  visible,
  error,
}) {
  if (!visible || !error) return null;
  return (
    <Text style={[{ fontFamily, fontSize: size, color }, styles]}>
      {error}
    </Text>
  );
}
