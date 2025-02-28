import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import { theme } from '../theme';
import { useSelector } from 'react-redux';

const WeeklyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    // Set initial date to today's date
    const currentDate = new Date(); // Get YYYY-MM-DD format
    setSelectedDate(currentDate);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <CalendarStrip
      scrollable
      style={{
        height: 100,
        paddingVertical: 10,
        borderBottomColor: theme.borderOnBlack,
        borderBottomWidth: 1,
      }}
      calendarHeaderStyle={{ color: isDarkMode ? theme.calendarText : 'black' }}
      dateNumberStyle={{ color: isDarkMode ? theme.calendarText : 'black' }}
      dateNameStyle={{ color: isDarkMode ? theme.calendarText : 'black' }}
      iconContainer={{ flex: 0.1 }}
      onDateSelected={handleDateChange}
      selectedDate={selectedDate}
      highlightDateContainerStyle={{ backgroundColor: theme.navbar }}
      highlightDateNameStyle={{ color: theme.calendarText }}
      highlightDateNumberStyle={{ color: theme.calendarText }}
      scrollerPaging={true}
    />
  );
};

export default WeeklyCalendar;
