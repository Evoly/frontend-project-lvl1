
install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

publishLocal:
	npm publish --dry-run

publish:
	npm publish

lint:
	npx eslint

.PHONY: test
