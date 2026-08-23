size:
	git count-objects -vH
bashrc:
	source ~/.bashrc
check:
	npm run format
	npm run lint
	npm run build
act:
	act --version
	act -j build -s GITHUB_TOKEN=fake-token
