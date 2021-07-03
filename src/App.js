import { React } from 'react';
import './App.scss';
import { Button } from '@material-ui/core';

const App = () =>
	<div className="App">
		<Button color="primary">Hello World</Button>
		<Button variant="contained">Default</Button>
		<Button variant="contained" color="primary">
			Primary
		</Button>
		<Button variant="contained" color="secondary">
			Secondary
		</Button>
		<Button variant="contained" disabled="disabled">
			Disabled
		</Button>
		<Button variant="contained" color="primary" href="#contained-buttons">
			Link
		</Button>
	</div>;

export default App;
