import { React } from 'react';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const MyButton = styled(Button)({
	background: 'linear-gradient(60deg, #bf3133 50%, #bf3145 50%)',
	padding: '5px 20px',
	color: 'white',
	borderRadius: '10%',
});

const StyleMyButton = () =>
	<MyButton>Button</MyButton>;

export default StyleMyButton;
