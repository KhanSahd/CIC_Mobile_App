import { View } from "react-native";
import { List } from "react-native-paper";
import { useSelector } from "react-redux";
import { styles } from "@/theme";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function MoreScreen() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const navigation = useNavigation();

  return (
    <View
      className="flex-1"
      style={{
        backgroundColor: isDarkMode
          ? styles.dark.backgroundColor
          : styles.light.backgroundColor,
      }}
    >
      <List.Item
        className="shadow-sm"
        style={{
          backgroundColor: isDarkMode
            ? styles.dark.componentBackgroundColor
            : styles.light.componentBackgroundColor,
        }}
        title="Teams"
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
        onPress={() => {
          navigation.navigate("Teams");
        }}
      />
    </View>
  );
}
