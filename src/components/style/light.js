import { createTheme } from '@material-ui/core';

const lightTheme = createTheme({
	palette: {
		primary: {
			main: '#5c6ac4',
			contrastText: '#fff',
		},
		secondary: {
			main: '#f44336',
		},
	},
});

export default lightTheme;
