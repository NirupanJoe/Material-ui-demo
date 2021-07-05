import React from 'react';
import { Switch, FormControlLabel } from '@material-ui/core';
import context from '../core/context';

const SwitchButton = () =>
	<FormControlLabel
		control={
			<Switch
				checked={ context.state.switch }
				onChange={ (evt) => context.actions
					.switchButton(evt.target.checked) }
			/>
		}
		label="Dark Theme"
	/>;

export default SwitchButton;
