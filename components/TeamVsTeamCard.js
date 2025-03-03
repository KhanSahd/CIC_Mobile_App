import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from '../theme';

const TeamVsTeamCard = ({ team1, team2, time }) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const formatToPST = (utcDate) => {
    const date = new Date(utcDate);
    return date.toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles', // Convert to Pacific Time (PST/PDT)
      hour: 'numeric',
      minute: '2-digit',
      hour12: true, // Use 12-hour format
    });
  };

  return (
    <View
      className="w-full flex-row mb-5 items-center justify-evenly h-36"
      style={{
        backgroundColor: isDarkMode
          ? styles.dark.componentBackgroundColor
          : styles.light.componentBackgroundColor,
      }}>
      <View>
        <Text
          style={{
            color: isDarkMode ? styles.dark.color : styles.light.color,
            maxWidth: 100,
            textAlign: 'center',
          }}>
          {team1.name}
        </Text>
        <Text
          style={{
            color: isDarkMode ? styles.dark.color : styles.light.color,
            textAlign: 'center',
            marginTop: 5,
          }}>
          {team1.record.wins} - {team2.record.losses}
        </Text>
      </View>
      <View className="flex-col items-center pt-5">
        <Text
          style={{
            color: isDarkMode ? styles.dark.color : styles.light.color,
          }}>
          vs
        </Text>
        <Text
          style={{
            color: isDarkMode ? styles.dark.color : styles.light.color,
          }}>
          {formatToPST(time)}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: isDarkMode ? styles.dark.color : styles.light.color,
            maxWidth: 100,
            textAlign: 'center',
          }}>
          {team2.name}
        </Text>
        <Text
          style={{
            color: isDarkMode ? styles.dark.color : styles.light.color,
            textAlign: 'center',
            marginTop: 5,
          }}>
          {team2.record.wins} - {team2.record.losses}
        </Text>
      </View>
    </View>
  );
};

export default TeamVsTeamCard;
