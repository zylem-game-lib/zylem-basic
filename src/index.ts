import { game, stage, sphere } from '@tcool86/zylem';

const example = game(
	stage(),
	sphere({
		update: ({ entity: ball, inputs }) => {
			const { horizontal, vertical } = inputs[0];
			ball.moveXY(horizontal * 5, -vertical * 5);
		}
	})
);

example.start();