import { React } from 'react';
import { Button } from '@material-ui/core';

const ButtonInput = () =>
	<div>
		<Button color="primary">Hello World</Button>
		<Button variant="contained">Default</Button>
		<Button variant="contained" color="primary">
			Primary
		</Button>
		<Button variant="contained" color="secondary">
			Secondary
		</Button>
		<Button variant="contained" color="primary" href="#contained-buttons">
			Link
		</Button>
	</div>;

export default ButtonInput;
