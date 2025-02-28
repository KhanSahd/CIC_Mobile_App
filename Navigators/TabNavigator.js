import '../global.css';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  HomeIcon,
  Cog6ToothIcon,
  CalendarDaysIcon,
  Bars2Icon,
  MoonIcon,
  SunIcon,
} from 'react-native-heroicons/solid';
import GamesScreen from '@/screens/GamesScreen';
import { styles, theme } from '../theme';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '@/features/darkOrLightMode/darkModeSlice';

const TabNavigator = () => {
  const navigation = useNavigation();
  const Tabs = createBottomTabNavigator();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handlePress = () => {
    dispatch(toggleDarkMode());
  };

  const headerOptions = {
    headerStyle: {
      backgroundColor: isDarkMode ? 'black' : theme.navbar,
      borderBottomColor: isDarkMode
        ? styles.darkBorder.borderBottomColor
        : styles.light.borderOnBlack,
      borderBottomWidth: 1,
    },
    headerTitleStyle: {
      color: isDarkMode ? styles.dark.color : styles.lightText,
      fontSize: 25,
      fontWeight: 'thin',
      textTransform: 'uppercase',
    },
    headerTitleAlign: 'left',
    headerShown: true,
    headerRight: () => (
      <TouchableOpacity onPress={handlePress} className="mr-4">
        {/* <Text style={isDarkMode ? styles.darkButtonText : styles.lightButtonText}>
          Toggle Theme
        </Text> */}
        {/* <Bars2Icon size={40} color={isDarkMode ? styles.dark.color : styles.light.color} /> */}
        {isDarkMode ? (
          <SunIcon
            size={30}
            style={{ marginRight: 10, marginBottom: 10 }}
            color={styles.dark.color}
          />
        ) : (
          <MoonIcon
            size={30}
            style={{ marginRight: 10, marginBottom: 10 }}
            color={styles.light.color}
          />
        )}
      </TouchableOpacity>
    ),
  };

  const TabIcon = ({ focused, icon: Icon, label }) => (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100',
      }}>
      <Icon
        size={40}
        color={
          focused && isDarkMode
            ? theme.navbar
            : isDarkMode
            ? styles.dark.color
            : focused && !isDarkMode
            ? styles.light.focusedColor
            : !focused && !isDarkMode
            ? 'black'
            : 'white'
        }
      />
      <Text
        style={{
          color:
            focused && isDarkMode
              ? styles.dark.focusedColor
              : isDarkMode
              ? styles.dark.color
              : focused && !isDarkMode
              ? styles.light.color
              : !focused && !isDarkMode
              ? 'black'
              : 'white',
          // width: '100%',
          // textAlign: 'center',
          fontSize: 16,
        }}>
        {label}
      </Text>
    </View>
  );

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopColor: '#cca000',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: isDarkMode ? 'black' : theme.navbar,
        },
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={HomeIcon} label="Home" />,
          ...headerOptions,
        }}
      />
      <Tabs.Screen
        name="Games"
        component={GamesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={CalendarDaysIcon} label="Games" />
          ),
          ...headerOptions,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Cog6ToothIcon} label="Settings" />
          ),
          ...headerOptions,
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
