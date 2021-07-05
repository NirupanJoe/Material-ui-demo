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

const actions = {
	increaseCount,
	selectInput,
	switchButton,
	slide,
};

export default actions;
