import { View, Text, ScrollView } from 'react-native';
import TeamVsTeamCard from '@/components/TeamVsTeamCard';
import WeeklyCalendar from '@/components/WeeklyCalendar';
import { useSelector } from 'react-redux';
import { styles } from '../theme';
import client from '../backend/client';
import { useEffect, useState } from 'react';
import { scheduleQuery } from '@/grokQueries';

const GamesScreen = () => {
  const [schedule, setSchedule] = useState([]);
  const [scheduleForToday, setScheduleForToday] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    fetchSchedule();
  }, []);

  useEffect(() => {
    if (schedule.length > 0) {
      updateTodaySchedule(date);
    }
  }, [schedule, date]); // Runs only when schedule is updated

  const fetchSchedule = async () => {
    try {
      client.fetch(scheduleQuery).then((data) => {
        setSchedule(data);
      });
    } catch (error) {
      console.error('error', error);
    }
  };

  const updateTodaySchedule = (newDate) => {
    const formattedDate = newDate.split('T')[0]; // Ensure consistent format

    const todaysSchedule = schedule.filter((game) => {
      const gameDate = new Date(game.date).toISOString().split('T')[0]; // Convert game date to YYYY-MM-DD
      return gameDate === formattedDate;
    });

    setScheduleForToday(todaysSchedule);

    console.log('Formatted Date:', formattedDate);
    console.log('Filtered Games:', todaysSchedule);
  };

  return (
    <ScrollView
      style={{
        backgroundColor: isDarkMode ? styles.dark.backgroundColor : styles.light.backgroundColor,
      }}>
      <WeeklyCalendar updateDate={setDate} />
      {scheduleForToday.length === 0 ? (
        <Text style={{ color: isDarkMode ? 'white' : 'black', textAlign: 'center', marginTop: 20 }}>
          No games available for this date
        </Text>
      ) : (
        scheduleForToday.map((game, index) => (
          <TeamVsTeamCard key={index} team1={game.team1} team2={game.team2} time={game.date} />
        ))
      )}
    </ScrollView>
  );
};

export default GamesScreen;
