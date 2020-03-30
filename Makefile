install:
	npm install

start:
	node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

progression:
	npx node src/bin/brain-progression.js

calc:
	npx node src/bin/brain-calc.js

even:
	npx node src/bin/brain-even.js

prime:
	npx node src/bin/brain-prime.js

gcd:
	npx node src/bin/brain-gcd.js
