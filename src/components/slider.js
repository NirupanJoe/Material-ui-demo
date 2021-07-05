import React from 'react';
import { Typography, Slider } from '@material-ui/core';
import context from '../core/context';

const VolumeSlider = () =>
	<div>
		<Typography id="continuous-slider">
			FontSize
		</Typography>
		<Slider
			value={ context.state.fontSize }
			onChange={ (dummy, newValue) => context.actions
				.slide(newValue) }
		/>
	</div>;

export default VolumeSlider;
