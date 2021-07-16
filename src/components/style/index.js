import { Box } from '@material-ui/core';
import { React } from 'react';
import ButtonStyle from './button';
import DarkModeButton from './darkModeButton';
import StyleMyButton from './myButton';

const Style = () =>
	<Box>
		{ButtonStyle()}
		{StyleMyButton()}
		{DarkModeButton()}
	</Box>;

export default Style;
