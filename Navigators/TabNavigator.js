import '../global.css';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import { Text, View } from 'react-native';
import { HomeIcon } from 'react-native-heroicons/solid';

const TabNavigator = () => {
  const navigation = useNavigation();
  const Tabs = createBottomTabNavigator();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopColor: '#cca000',
          position: 'absolute',
        },
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="flex items-end justify-center">
              <HomeIcon color={focused ? '#cca000' : 'white'} />
              <Text className="text-black">Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
