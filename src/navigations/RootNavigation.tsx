import { createStackNavigator } from "@react-navigation/stack";

import MainStack from "./MainStack";

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
