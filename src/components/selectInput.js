import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import context from '../core/context';

const Option = (text) =>
	<MenuItem key={ text } value={ text }>{text}</MenuItem>;

const SelectInput = () =>
	<span>
		<InputLabel id="demo-simple-select-label">Text</InputLabel>
		<Select
			labelId="demo-simple-select-label"
			id="demo-simple-select"
			value={ context.state.text }
			onChange={ (evt) => context.actions.selectInput(evt.target.value) }
		>
			{context.config.texts.map(Option)}
		</Select>
	</span>;

export default SelectInput;
