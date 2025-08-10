import { View, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { styles } from '@/theme';

const HighlightsScreen = () => {
	const navigation = useNavigation();
	const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, [navigation]);

	// useEffect(() => {
	// 	fetchData();
	// }, []);

	// const fetchData = async () => {
	// 	try {
	// 		const results = await client.fetch(highlightsQuery);
	// 		setData(results);
	// 	} catch (error) {
	// 		console.error('Error fetching highlights:', error);
	// 	}
	// };

	return (
		<View
			className="flex-1 justify-center items-center"
			style={isDarkMode ? styles.dark : styles.light}
		>
			<Text style={isDarkMode ? styles.darkText : styles.lightText}>Highlights</Text>
		</View>
	);
};

export default HighlightsScreen;
