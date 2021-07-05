const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const selectInput = ({ data }) => ({
	text: data,
});
const switchButton = ({ data }) => ({
	theme: data,
});
const setFontSize = ({ data }) => ({
	fontSize: data,
});
const radioButton = ({ data }) => ({
	theme: data === 'true',
});

const actions = {
	increaseCount,
	selectInput,
	switchButton,
	setFontSize,
	radioButton,
};

export default actions;
