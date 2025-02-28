import { StyleSheet } from 'react-native';

// theme.js
const theme = {
  main_color_dark: '#050505',
  navbar: 'red',
  lightNavbar: '#00b3ff',
  notActiveColor: 'black',
  activeColor: 'white',
  calendarText: '#f5fefc',
  borderOnBlack: '#343a40',
  gradientBackground: 'rgb(236, 229, 232)',
  gradient: 'radial-gradient(circle, rgba(236,229,232,1) 0%, rgba(148,187,233,1) 100%)',
};

const styles = StyleSheet.create({
  dark: {
    backgroundColor: theme.main_color_dark,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    focusedColor: 'red',
  },
  darkBorder: {
    borderBottomColor: theme.borderOnBlack,
    borderBottomWidth: 1,
  },
  darkText: {
    color: 'white',
  },
  darkButton: {
    backgroundColor: theme.activeColor,
    padding: 10,
    borderRadius: 5,
  },
  darkButtonText: {
    color: 'black',
  },
  darkModeHeaders: {
    backgroundColor: theme.navbar,
    borderBottomColor: theme.borderOnBlack,
    borderBottomWidth: 2,
  },

  light: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    navbar: theme.lightNavbar,
    focusedColor: 'white',
  },
  lightText: {
    color: 'black',
  },
  lightButton: {
    backgroundColor: theme.main_color_dark,
    padding: 10,
    borderRadius: 5,
  },
  lightButtonText: {
    color: 'white',
  },
  lightModeHeaders: {
    backgroundColor: theme.lightNavbar,
    borderBottomColor: theme.borderOnBlack,
    borderBottomWidth: 2,
  },
});

export { theme, styles };
