import {NodeCG} from "../types/nodecg";

import * as nodecgApiContext from './utils/nodecg-api-context';

module.exports = (nodecg:NodeCG) => {
	// Set the context api so all the modules can access it
	nodecgApiContext.set(nodecg)
	init().then(() => {
		nodecg.log.info('Initialization successful.');
	}).catch(error => {
		nodecg.log.error('Failed to initialize:', error);
	});
	// Modules
}

async function init() {
	const nodecg = nodecgApiContext.get()
	nodecg.log.info("Initializing league of legends ui backend...")
	
	// Modules
	require("./champselect")
	require("./ddragonfetch")
}