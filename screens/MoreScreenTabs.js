import MoreScreen from '@/Navigators/MoreScreen';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import TeamsScreen from './TeamsScreen';

export default function MoreScreenTabs() {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen name="More" component={MoreScreen} options={{ headerShown: false }} />
			<Stack.Screen name="TeamsScreen" component={TeamsScreen} options={{ headerShown: true }} />
		</Stack.Navigator>
	);
}
