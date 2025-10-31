size:
	git count-objects -vH
bashrc:
	source ~/.bashrc
check:
	npm run format
	npm run lint
	npm run build
