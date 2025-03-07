import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from '@/theme';

const List = ({ rankingList }) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <View
      className="w-full flex-col items-center p-4 rounded-lg"
      style={{
        backgroundColor: isDarkMode
          ? styles.dark.componentBackgroundColor
          : styles.light.componentBackgroundColor,
      }}>
      <Text
        className="text-4xl mb-5"
        style={{ color: isDarkMode ? styles.dark.color : styles.light.color }}>
        {rankingList.title}
      </Text>
      {rankingList.ranking.map((item, index) => (
        <View className="flex-row mb-2 w-3/4 justify-between" key={index}>
          <Text
            className="text-xl text-right"
            style={{ color: isDarkMode ? styles.dark.color : styles.light.color }}>
            {index + 1}.{' '}
          </Text>
          <Text
            className="text-xl text-center"
            style={{ color: isDarkMode ? styles.dark.color : styles.light.color }}>
            {item.name}
          </Text>
          <Text
            className="text-xl text-right"
            style={{ color: isDarkMode ? styles.dark.color : styles.light.color }}>
            {item.position}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default List;
