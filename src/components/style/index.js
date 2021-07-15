import { Box } from '@material-ui/core';
import { React } from 'react';
import ButtonStyle from './button';
import StyleMyButton from './myButton';

const Style = () =>
	<Box>
		{ButtonStyle()}
		{StyleMyButton()}
	</Box>;

export default Style;
