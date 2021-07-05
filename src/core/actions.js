const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const selectInput = ({ data }) => ({
	text: data,
});
const switchButton = ({ data }) => ({
	switch: data,
});

const actions = {
	increaseCount,
	selectInput,
	switchButton,
};

export default actions;
