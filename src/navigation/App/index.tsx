import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Login';
import routes from '../../navigation/helper/routes';

const Stack = createNativeStackNavigator();

const AppRoute = () => {
  return (
    <Stack.Navigator initialRouteName={routes.HOME}>
      <Stack.Screen name={routes.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default AppRoute;
