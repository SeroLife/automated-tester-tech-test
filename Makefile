install:
	$(call header,Starting docker service)
	npm i && cd api && npm i && cd .. && cd ui && npm i && cd .. && cd e2e && npm i

docker-compose:
	$(call header,Starting docker service)
	docker compose up

run-tests:
	$(call header,Running tests)
	cd e2e && npm run e2e

migrate:
	$(call header,Migrating database)
	cd api && DATABASE_URL="postgres://recipeman:password@127.0.0.1:5438/recipe" npx prisma migrate dev --name init