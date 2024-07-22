import { game, stage, sphere } from '@tcool86/zylem';

const example = game({
	id: 'basic-game',
	globals: {
		score: 0
	},
	stages: [
		stage({
			children: () => [
				sphere({
					update: ({ entity: ball, inputs }) => {
						const { horizontal, vertical } = inputs[0];
						ball.moveXY(horizontal * 5, -vertical * 5);
					}
				})
			]
		})
	],
});

example.start();