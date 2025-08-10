import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { List } from "react-native-paper";
import { styles } from "@/theme";
import { useSelector } from "react-redux";

export default function TeamsScreen() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <View>
      <List.Item
        className="shadow-sm "
        style={{
          backgroundColor: isDarkMode
            ? styles.dark.componentBackgroundColor
            : styles.light.componentBackgroundColor,
        }}
        title="View Teams"
        titleStyle={{
          color: isDarkMode ? styles.dark.color : styles.light.color,
        }}
        left={(props) => (
          <List.Icon
            {...props}
            icon="account-group"
            color={isDarkMode ? styles.dark.color : styles.light.color}
          />
        )}
        onPress={() => {}}
      />
    </View>
  );
}
