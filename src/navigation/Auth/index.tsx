import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import routes from '../../navigation/helper/routes';

const Stack = createNativeStackNavigator();

const AuthRoute = () => {
  return (
    <Stack.Navigator initialRouteName={routes.LOGIN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthRoute;
