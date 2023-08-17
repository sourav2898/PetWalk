import { Text, View } from 'react-native';
import React from 'react';
import { useAppSelector } from '../../hooks/storeActions';
import { RootState } from '../../redux/store';

const Login = () => {
  const login = useAppSelector((state: RootState) => state.login);
  return (
    <View>
      <Text style={{ color: 'black' }}>Hello here, please login</Text>
    </View>
  );
};

export default Login;
