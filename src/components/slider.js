import React from 'react';
import { Typography, Slider } from '@material-ui/core';
import FormatSizeSharpIcon from '@material-ui/icons/FormatSizeSharp';
import context from '../core/context';

const FontSlider = () =>
	<span>
		<Typography>
			FontSize
		</Typography>
		<span id="MuiSvgIcon-root"><FormatSizeSharpIcon/></span>
		<Slider
			value={ context.state.fontSize }
			onChange={ (dummy, newValue) => context.actions
				.setFontSize(newValue) }
			min={ 10 }
			max={ 25 }
			valueLabelDisplay="auto"
		/>
	</span>;

export default FontSlider;
