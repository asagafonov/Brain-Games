install:
	npm install

start:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

progression:
	node bin/brain-progression.js

calc:
	node bin/brain-calc.js

even:
	node bin/brain-even.js

prime:
	node bin/brain-prime.js

gcd:
	node bin/brain-gcd.js
