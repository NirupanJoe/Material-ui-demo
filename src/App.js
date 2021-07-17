import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { React } from 'react';
import './App.scss';
import darkTheme from './components/style/dark';
import DarkModeButton from './components/style/darkModeButton';
import liteTheme from './components/style/light';
import context from './core/context';

const theme = () =>
	(context.state.theme ? darkTheme : liteTheme);

const App = () =>
	<ThemeProvider theme={ theme() }>
		<Button variant="contained">Default</Button>
		<Button variant="contained" color="primary">
			Primary
		</Button>
		<Button variant="contained" color="secondary">
			Secondary
		</Button>
		<Button variant="contained" disabled={ true }>
			Disabled
		</Button>
		<Button variant="contained" color="action" href="#contained-buttons">
			Link
		</Button>
		{DarkModeButton()}
	</ThemeProvider>;

export default App;
