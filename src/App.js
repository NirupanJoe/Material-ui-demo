import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { React } from 'react';
import './App.scss';
import liteTheme from './components/style/light';

const App = () =>
	<ThemeProvider theme={ liteTheme }>
		<Button variant="contained" color="primary">primary</Button>
		<Button color="secondary">secondary</Button>
	</ThemeProvider>;

export default App;
