import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import { styles, theme } from '../theme';
import { useSelector } from 'react-redux';

const WeeklyCalendar = ({ updateDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    // Set initial date to today's date
    const currentDate = new Date().toISOString().split('T')[0]; // Get YYYY-MM-DD format
    setSelectedDate(currentDate);
  }, []);

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split('T')[0]; // Convert to "YYYY-MM-DD"
    setSelectedDate(formattedDate);
    updateDate(formattedDate);
  };

  return (
    <CalendarStrip
      scrollable
      style={{
        height: 100,
        paddingVertical: 10,
        borderBottomColor: isDarkMode ? styles.dark.borderColor : styles.light.borderColor,
        borderBottomWidth: 1,
      }}
      calendarHeaderStyle={{ color: isDarkMode ? styles.dark.color : styles.light.color }}
      dateNumberStyle={{ color: isDarkMode ? styles.dark.color : styles.light.color }}
      dateNameStyle={{ color: isDarkMode ? styles.dark.color : styles.light.color }}
      iconContainer={{ flex: 0.1 }}
      onDateSelected={handleDateChange}
      selectedDate={selectedDate}
      highlightDateContainerStyle={{ backgroundColor: 'blue' }}
      highlightDateNameStyle={{ color: theme.calendarText }}
      highlightDateNumberStyle={{ color: theme.calendarText }}
      scrollerPaging={true}
    />
  );
};

export default WeeklyCalendar;
