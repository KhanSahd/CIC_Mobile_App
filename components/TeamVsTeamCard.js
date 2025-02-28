import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from '../theme';

const TeamVsTeamCard = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <View className="w-full flex-row text- items-center justify-evenly h-36">
      <View>
        <Text
          style={{
            color: isDarkMode ? 'white' : 'black',
          }}>
          Team 1
        </Text>
      </View>
      <View className="flex-col items-center">
        <Text
          style={{
            color: isDarkMode ? 'white' : 'black',
          }}>
          vs
        </Text>
        <Text
          style={{
            color: isDarkMode ? 'white' : 'black',
          }}>
          8:00pm
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: isDarkMode ? 'white' : 'black',
          }}>
          Team 2
        </Text>
      </View>
    </View>
  );
};

export default TeamVsTeamCard;
