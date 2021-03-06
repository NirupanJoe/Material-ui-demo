import { React } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	btn: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
		margin: '20px',
	},
});

const ButtonStyle = () => {
	const classes = useStyles();

	return <Button className={ classes.btn }>Style</Button>;
};

export default ButtonStyle;
