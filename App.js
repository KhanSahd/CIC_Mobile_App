import { NavigationContainer, StackRouter } from '@react-navigation/native';
import TabNavigator from './Navigators/TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen name="MainTabNavigator" component={TabNavigator} />
          </stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
