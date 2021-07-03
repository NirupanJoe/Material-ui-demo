import { React } from 'react';
import './App.scss';
import ButtonInput from './components/button';
import SelectInput from './components/selectInput';
import context from './core/context';

const App = () =>
	<div className="App">
		{ButtonInput()}
		{SelectInput()}
		{context.state.text}
	</div>;

export default App;
