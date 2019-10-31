
install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

startEven:
	npx babel-node src/bin/brain-even.js

distEven:
	npx babel-node dist/bin/brain-even.js

publishLocal:
	npm publish --dry-run

publish:
	npm publish

lint:
	npx eslint .

.PHONY: test
