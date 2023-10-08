init:
	rm -rf rfront/node_modules
	docker compose run rfront npm install

up:
	docker compose up

test:
	docker compose run rfront npm test

vscaffold:
	docker compose run --rm vscaffolder npm create -y vite@4.4.0 ${i}
