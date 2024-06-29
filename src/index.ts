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
						const { moveRight, moveLeft, moveUp, moveDown } = inputs[0];
						if (moveRight) {
							ball.moveX(5);
						} else if (moveLeft) {
							ball.moveX(-5);
						} else if (moveUp) {
							ball.moveY(5);
						} else if (moveDown) {
							ball.moveY(-5);
						} else {
							ball.moveXY(0, 0);
						}
					}
				})
			]
		})
	],
});

example.start();