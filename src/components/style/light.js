import { createTheme } from '@material-ui/core';

const lightTheme = createTheme({
	palette: {
		primary: {
			light: '#b71c1c',
			main: '#1b5e20',
			dark: '#0d47a1',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ef9a9a',
			main: '#f44336',
			dark: '#c62828',
		},
		action: {
			disabledBackground: 'orange',
			disabled: 'white',
		},
	},
});

export default lightTheme;
