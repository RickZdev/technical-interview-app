import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type ButtonType = {
  label: string;
  onPress: () => void;
};

const ButtonNav = ({ label, onPress }: ButtonType) => {
  return (
    <TouchableOpacity
      testID="nav-button"
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default ButtonNav;
