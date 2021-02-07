init:
	@docker-compose up -d
stop:
	@docker-compose down
open_db:
	@docker-compose exec mysql mysql -ustrapi -pstrapi strapi
