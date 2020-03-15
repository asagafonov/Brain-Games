install:
	npm-install

start:
	npx node src/games/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

progression:
	npx node src/games/brain-progression.js

calc:
	npx node src/games/brain-cals.js

even:
	npx node src/games/brain-even.js

prime:
	npx node src/games/brain-prime.js

gcd:
	npx node src/games/brain-gcd.js
