include .env

up:
	docker-compose up -d
down:
	docker-compose down --remove-orphans
restart:
	@make down
	@make up
app:
	docker-compose exec app sh
mongo:
	docker-compose exec mongo sh
mongosh:
	docker-compose exec mongo sh -c "mongosh -u root"
logs:
	docker-compose logs --follow
log-app:
	docker-compose logs --follow app
prod-db:
	mongosh "mongodb+srv://magic-battle-api.a1gcizn.mongodb.net/${DB_NAME}" --apiVersion 1 --username ${DB_USER}
