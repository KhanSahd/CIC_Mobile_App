import '../global.css';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import {
	HomeIcon,
	Cog6ToothIcon,
	CalendarDaysIcon,
	Bars2Icon,
	EllipsisHorizontalCircleIcon,
} from 'react-native-heroicons/outline';
import {
	MoonIcon,
	SunIcon,
	HomeIcon as SolidHome,
	CalendarDaysIcon as SolidCalendar,
	Cog6ToothIcon as SolidSettings,
	EllipsisHorizontalCircleIcon as SolidMore,
} from 'react-native-heroicons/solid';
import GamesScreen from '@/screens/GamesScreen';
import { styles, theme } from '../theme';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '@/features/darkOrLightMode/darkModeSlice';
import HighlightsScreen from '@/screens/HighlightsScreen';
import MoreNavigator from './MoreScreen';
import MoreScreenTabs from '@/screens/MoreScreenTabs';

const TabNavigator = () => {
	const navigation = useNavigation();
	const Tabs = createBottomTabNavigator();
	const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
	const dispatch = useDispatch();

	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, [navigation]);

	const handlePress = () => {
		dispatch(toggleDarkMode());
	};

	const headerOptions = {
		headerStyle: {
			backgroundColor: isDarkMode ? styles.dark.navbar : styles.light.navbar,
			borderBottomColor: isDarkMode ? styles.dark.borderColor : styles.light.borderColor,
			borderBottomWidth: 1,
		},
		headerTitleStyle: {
			color: isDarkMode ? styles.dark.color : styles.lightText,
			fontSize: 25,
			fontWeight: 'thin',
		},
		headerTitleAlign: 'left',
		headerRight: () => (
			<TouchableOpacity onPress={handlePress} className="mr-4">
				{isDarkMode ? (
					<SunIcon
						size={30}
						style={{ marginRight: 10, marginBottom: 10 }}
						color={styles.dark.color}
					/>
				) : (
					<MoonIcon
						size={30}
						style={{ marginRight: 10, marginBottom: 10 }}
						color={styles.light.color}
					/>
				)}
			</TouchableOpacity>
		),
	};

	const TabIcon = ({ focused, icon: Icon, focusedIcon: FocusedIcon, label }) => (
		<View
			style={{
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100',
			}}
		>
			{focused ? (
				<FocusedIcon color={isDarkMode ? styles.dark.color : styles.light.color} />
			) : (
				<Icon color={isDarkMode ? styles.dark.color : styles.light.color} />
			)}
			<Text
				style={{
					color: isDarkMode ? styles.dark.color : styles.light.color,
					fontSize: 12,
					fontWeight: focused ? 'bold' : 'normal',
				}}
			>
				{label}
			</Text>
		</View>
	);

	return (
		<Tabs.Navigator
			screenOptions={{
				tabBarStyle: {
					borderTopColor: isDarkMode ? styles.dark.borderColor : styles.light.borderColor,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					backgroundColor: isDarkMode ? styles.dark.navbar : styles.light.navbar,
					height: 60,
				},
				animation: 'shift',
			}}
		>
			<Tabs.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={HomeIcon} focusedIcon={SolidHome} label="Home" />
					),
					...headerOptions,
				}}
			/>
			<Tabs.Screen
				name="Schedule"
				component={GamesScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={CalendarDaysIcon}
							focusedIcon={SolidCalendar}
							label="Games"
						/>
					),
					...headerOptions,
				}}
			/>
			<Tabs.Screen
				name="Highlights"
				component={HighlightsScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={Cog6ToothIcon}
							focusedIcon={SolidSettings}
							label="Highlights"
						/>
					),
					...headerOptions,
				}}
			/>
			<Tabs.Screen
				name="MoreScreen"
				component={MoreScreenTabs}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={EllipsisHorizontalCircleIcon}
							focusedIcon={SolidMore}
							label="More"
						/>
					),
					...headerOptions,
				}}
			/>
		</Tabs.Navigator>
	);
};

export default TabNavigator;
