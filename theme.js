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
    backgroundColor: '#0a0a0b',
    componentBackgroundColor: '#212529',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    color: 'white',
    focusedColor: 'red',
    navbar: '#0a0a0b',
    borderColor: '#0a0a0b',
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
    backgroundColor: '#e9ecef',
    componentBackgroundColor: '#f8f9fa',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    color: 'black',
    navbar: '#e9ecef',
    focusedColor: 'white',
    borderColor: '#f8f9fa',
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
