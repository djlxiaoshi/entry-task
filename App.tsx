import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store/index';
import LoginPage from './page/Login';
import HomePage from './page/Home';
import UserPage from './page/User';
import DetailsPage from './page/Details';
import TestPage from './page/Test/Map';

class App extends Component {

  constructor (props) {
    super(props);
  }


  componentDidMount () {
  }

  render () {

      const Stack = createStackNavigator();
      return (
          <Provider store={store}>
              <NavigationContainer>
                  <Stack.Navigator initialRouteName='Test'>
                      <Stack.Screen
                          name="Login"
                          component={LoginPage}
                          options={{
                              header: () => null
                          }}
                      />
                      <Stack.Screen
                          name="Home"
                          component={HomePage}
                          options={{
                            header: () => null
                          }}
                      />
                      <Stack.Screen
                          name="User"
                          component={UserPage}
                          options={{
                            header: () => null
                          }}
                      />
                      <Stack.Screen
                          name="Details"
                          component={DetailsPage}
                          options={{
                            header: () => null
                          }}
                      />
                      <Stack.Screen
                          name="Test"
                          component={TestPage}
                      />
                  </Stack.Navigator>
              </NavigationContainer>
          </Provider>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;