install:
	npm-install

start:
	npx node src/games/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
