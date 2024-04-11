import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import RootNavigation from "./src/navigations/RootNavigation";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
