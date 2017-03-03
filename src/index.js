import { h as hr, render as doRender } from 'preact';
import Contextualize from './contextualize';
import createCycle from './create-cycle';

function createRenderer(Renderable, parent) {
	let root;
	return props => {
		root = doRender((
			<Contextualize {...props}>
				<Renderable {...props} />
			</Contextualize>
		), parent, root);
	};
}

export const render = (Renderable, data, parent) => {
	let renderer = createRenderer(Renderable, parent);
	return createCycle(renderer, data);
}
export const h = hr;
