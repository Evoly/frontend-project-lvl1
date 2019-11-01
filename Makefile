
install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

startEven:
	npx babel-node src/bin/brain-even.js

startCalc:
	npx babel-node src/bin/brain-calc.js

startGcd:
	npx babel-node src/bin/brain-gcd.js

startProgression:
	npx babel-node src/bin/brain-progression.js

publishLocal:
	npm publish --dry-run

publish:
	npm publish

lint:
	npx eslint .

.PHONY: test
