import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import ButtonNav from "../components/ButtonNav";
import axios from "axios";

const Account = () => {
  const { goBack } = useNavigation<any>();

  const handleNavigationPress = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <ButtonNav label="Go Back" onPress={handleNavigationPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Account;
