import { React } from 'react';
import './App.scss';
import ButtonInput from './components/button';
import SelectInput from './components/selectInput';
import VolumeSlider from './components/slider';
import SwitchButton from './components/switchButton';
import context from './core/context';

const App = () =>
	<div
		style={ { fontSize: `${ context.state.fontSize }px` } }
		className={ `App ${ context.state.switch ? 'dark' : 'lite' }` }
	>
		<div className="container">
			{ButtonInput()}
			{SelectInput()}
			{context.state.text}
			<div>{SwitchButton()}</div>
			{VolumeSlider()}
		</div>
	</div>;

export default App;
