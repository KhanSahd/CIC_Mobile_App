import MoreScreen from "@/Navigators/MoreScreen";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useCallback, useEffect } from "react";
import TeamsScreen from "./TeamsScreen";
import { styles } from "@/theme";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "@/features/darkOrLightMode/darkModeSlice";
import { TouchableOpacity } from "react-native";
import { MoonIcon, SunIcon } from "react-native-heroicons/solid";

export default function MoreScreenTabs() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {}, [navigation]);

  const handlePress = () => {
    dispatch(toggleDarkMode());
  };

  const headerOptions = {
    headerStyle: {
      backgroundColor: isDarkMode ? styles.dark.navbar : styles.light.navbar,
      borderBottomColor: isDarkMode
        ? styles.dark.borderColor
        : styles.light.borderColor,
      borderBottomWidth: 1,
    },
    headerTitleStyle: {
      color: isDarkMode ? styles.dark.color : styles.lightText.color,
      fontSize: 25,
      fontWeight: "thin",
    },
    headerTitleAlign: "left",
    headerRight: () => (
      <TouchableOpacity onPress={handlePress} className="mr-4">
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

  const backHeaderOptions = {
    headerBackVisible: true,
    headerTintColor: isDarkMode ? styles.dark.color : styles.light.color,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="More"
        component={MoreScreen}
        options={{ ...headerOptions }}
      />
      <Stack.Screen
        name="Teams"
        component={TeamsScreen}
        options={{
          ...backHeaderOptions,
          ...headerOptions,
        }}
      />
    </Stack.Navigator>
  );
}
