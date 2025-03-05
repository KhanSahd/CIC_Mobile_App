import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const ParagraphEntry = ({ paragraph }) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <View className="w-full p-5">
      {/* Heading, if present */}
      {paragraph.heading && (
        <Text
          className="text-2xl font-bold text-center mb-5"
          style={{ color: isDarkMode ? 'white' : 'black' }}>
          {paragraph.heading}
        </Text>
      )}
      {/* Content, if present */}
      {paragraph.content && (
        <Text className="text-lg text-center" style={{ color: isDarkMode ? 'white' : 'black' }}>
          {paragraph.content}
        </Text>
      )}
    </View>
  );
};

export default ParagraphEntry;
