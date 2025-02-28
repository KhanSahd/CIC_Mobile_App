import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { styles } from '@/theme';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? 'black' : 'white',
        flex: 1,
      }}>
      <Text
        style={{
          color: isDarkMode ? styles.dark.color : styles.light.color,
        }}>
        SettingsScreen
      </Text>
    </View>
  );
};

export default SettingsScreen;
