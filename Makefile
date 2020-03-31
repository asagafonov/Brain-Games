install:
	npm install

start:
	node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

progression:
	node src/bin/brain-progression.js

calc:
	node src/bin/brain-calc.js

even:
	node src/bin/brain-even.js

prime:
	node src/bin/brain-prime.js

gcd:
	node src/bin/brain-gcd.js
