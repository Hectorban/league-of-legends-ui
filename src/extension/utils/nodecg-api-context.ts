import {NodeCG} from '../../types/nodecgServer';

let context: NodeCG;

export function get(): NodeCG {
	return context;
}

export function set(ctx: NodeCG): void {
	context = ctx;
}