import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import context from '../core/context';

const Option = (text) =>
	<MenuItem key={ text } value={ text }>{text}</MenuItem>;

const SelectInput = () =>
	<div>
		<InputLabel id="demo-simple-select-label">Text</InputLabel>
		<Select
			labelId="demo-simple-select-label"
			id="demo-simple-select"
			value={ context.state.text }
			onChange={ (evt) => context.actions.selectInput(evt.target.value) }
		>
			{context.config.texts.map(Option)}
		</Select>
	</div>;

export default SelectInput;
