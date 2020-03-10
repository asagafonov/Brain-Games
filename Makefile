install:
	npm-install

start:
	npx node bin/brain-games.js

even:
	npx node bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
