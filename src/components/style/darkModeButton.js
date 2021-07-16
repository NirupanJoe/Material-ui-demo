import React from 'react';
import { Switch, FormControlLabel } from '@material-ui/core';
import context from '../../core/context';

const DarkModeButton = () =>
	<FormControlLabel
		control={
			<Switch
				checked={ context.state.theme }
				onChange={ (evt) => context.actions
					.switchButton(evt.target.checked) }
			/>
		}
		label="Dark Theme"
	/>;

export default DarkModeButton;
