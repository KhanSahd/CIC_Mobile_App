import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'thin',
        textTransform: 'uppercase',
      },
      headerTitleAlign: 'left',
    });
  }, []);

  return (
    <View className="h-full bg-black">
      <Text className="text-white">SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;
