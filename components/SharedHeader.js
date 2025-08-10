import { styles } from '@/theme';
import { TouchableOpacity } from 'react-native';
import { MoonIcon, SunIcon } from 'react-native-heroicons/solid';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '@/features/darkOrLightMode/darkModeSlice';

// sharedHeader.js
export const getSharedHeader = (isDarkMode, handlePress) => ({
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
		<TouchableOpacity onPress={handlePress} style={{ marginRight: 10 }}>
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
});
