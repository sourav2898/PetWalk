import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, Text } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { MD3LightTheme as DefaultTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper';
import reduxStore from './redux/store';
import AppRoute from './navigation/App';
import AuthRoute from './navigation/Auth';

const lightTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

function App(): JSX.Element {
  const isAuthenticated = null;
  const isDarkMode = useColorScheme() === 'dark';
  const { store, persistor } = reduxStore;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#fff' : '#111',
    flexGrow: 1,
  };

  const theme = React.useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <SafeAreaView style={backgroundStyle}>
            <StatusBar
              barStyle={isDarkMode ? 'dark-content' : 'light-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <NavigationContainer>
              {isAuthenticated ? <AppRoute /> : <AuthRoute />}
            </NavigationContainer>
          </SafeAreaView>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
