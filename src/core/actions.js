const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const selectInput = ({ data }) => ({
	text: data,
});

const actions = {
	increaseCount,
	selectInput,
};

export default actions;
