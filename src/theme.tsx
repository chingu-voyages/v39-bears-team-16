// Default theme color
export const darkTheme = {
  color: {
    primary: '#FFFFFF',
    secondary: '#A8A8A8',
    teal: '#20C997',
    violet: '#6610F2',
    pink: '#D63384',
    orange: '#FD7E14',
    red: '#EE2D21',
    black: '#000000DC',
    blue: '#0D6EFD',
    grey: '#6D6D6D',
    white: '#FFFFFF',
    yellow: '#FFC700',
    green: '#1ec71e',
  },
  background: {
    primary: '#30304D',
    secondary: '#242237',
    teal: '#20C997',
    violet: '#6610F2',
    pink: '#D63384',
    orange: '#FD7E14',
    red: '#EE2D21',
    darkRed: '#A31910',
    black: '#000000',
    blue: '#0D6EFD',
    grey: '#A8A8A85B',
    white: '#FFFFFF',
    yellow: '#FFC700',
    green: '#0f996f',
    darkGreen: '#0c8560',
  },
};

// Light theme color
export const lightTheme = {};

export interface ThemeTypes {
  color: {
    [x: string]: string;
  };
  background: {
    [x: string]: string;
  };
}
