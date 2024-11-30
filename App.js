import { NavigationContainer, StackRouter } from '@react-navigation/native';
import TabNavigator from './Navigators/TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="MainTabNavigator" component={TabNavigator} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
