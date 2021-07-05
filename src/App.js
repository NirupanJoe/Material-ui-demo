import { React } from 'react';
import './App.scss';
import ButtonInput from './components/button';
import RadioButton from './components/radioButton';
import SelectInput from './components/selectInput';
import FontSlider from './components/slider';
import SwitchButton from './components/switchButton';
import context from './core/context';

const theme = () => `App ${ context.state.theme ? 'dark' : 'lite' }`;

const StyleFont = () => ({
	fontSize: `${ context.state.fontSize }px`,
});

const App = () =>
	<div
		style={ StyleFont() }
		className={ theme() }
	>
		<div className="container">
			<div>{ButtonInput()}</div>
			<div>{SelectInput()}</div>
			<div>{context.state.text}</div>
			<div>{SwitchButton()}</div>
			<div>{RadioButton()}</div>
			<div>{FontSlider()}</div>
		</div>
	</div>;

export default App;
