const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const selectInput = ({ data }) => ({
	text: data,
});
const switchButton = ({ data }) => ({
	switch: data,
});
const slide = ({ data }) => ({
	fontSize: data,
});
const radioButton = ({ data }) => ({
	switch: data === 'true',
});

const actions = {
	increaseCount,
	selectInput,
	switchButton,
	slide,
	radioButton,
};

export default actions;
