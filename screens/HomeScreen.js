import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const navigation = useNavigation();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <View style={isDarkMode ? styles.dark : styles.light}>
      <Text style={isDarkMode ? styles.darkText : styles.lightText} className="text-3xl font-bold">
        Hello World
      </Text>
    </View>
  );
};

export default HomeScreen;
