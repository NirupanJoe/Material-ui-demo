import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
	text: config.texts[0],
	switch: false,
	fontSize: 10,
};

export default seed;
