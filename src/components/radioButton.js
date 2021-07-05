import React from 'react';
import { RadioGroup, FormControl, Radio,
	FormLabel, FormControlLabel } from '@material-ui/core';
import context from '../core/context';

const RadioButton = () =>
	<FormControl component="fieldset">
		<FormLabel component="legend">SwitchControl</FormLabel>
		<RadioGroup
			value={ String(context.state.switch) }
			onChange={ (evt) => context.actions.radioButton(evt.target.value) }
		>
			<FormControlLabel
				value="true"
				control={ <Radio/> }
				label="Dark"
			/>
			<FormControlLabel
				value="false"
				control={ <Radio/> }
				label="Light"
			/>
		</RadioGroup>
	</FormControl>;

export default RadioButton;
