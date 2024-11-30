import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
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
    <View className="bg-black h-full">
      <Text className="text-white">HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
