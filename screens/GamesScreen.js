import { View, Text, ScrollView } from 'react-native';
import TeamVsTeamCard from '@/components/TeamVsTeamCard';
import WeeklyCalendar from '@/components/WeeklyCalendar';
import { useSelector } from 'react-redux';
import { styles } from '../theme';

const GamesScreen = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <ScrollView
      style={{
        backgroundColor: isDarkMode ? 'black' : 'white',
      }}>
      <WeeklyCalendar />
      <TeamVsTeamCard />
      <TeamVsTeamCard />
      <TeamVsTeamCard />
      <TeamVsTeamCard />
      <TeamVsTeamCard />
      <TeamVsTeamCard />
      <TeamVsTeamCard />
      <TeamVsTeamCard />
      <TeamVsTeamCard />
      <TeamVsTeamCard />
      <TeamVsTeamCard />
      <TeamVsTeamCard />
      <TeamVsTeamCard />
      <TeamVsTeamCard />
    </ScrollView>
  );
};

export default GamesScreen;
