import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Account from "../screens/Account";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
