import {NodeCG} from "../types/nodecg";

import nodecgApiContext from './utils/nodecg-api-context';

module.exports = (nodecg:NodeCG) => {
	// Set the context api so all the modules can access it
	nodecgApiContext.set(nodecg)
	
	// Modules
	require('./champselect')
	require('./ddragonfetch')	
}