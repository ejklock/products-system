.DEFAULT_GOAL := help

PWD ?= $$(pwd)
USERID ?= $$(id -u)


build-backend: ## Build the docker image of back-end
	docker-compose  -f back-end/docker-compose.yml build
	
build-backend-nocache: ## Build the docker image of back-end
	docker-compose  -f back-end/docker-compose.yml build --no-cache

start-backend: ## Build and Start the docker container of back-end
	docker-compose  -f back-end/docker-compose.yml up -d

stop-backend: ## Stop the docker container of back-end
	docker-compose  -f back-end/docker-compose.yml stop

tests-backend: ## Run Tests on the docker container of back-end
	docker-compose  -f back-end/docker-compose.yml exec api npm test

	build-backend: ## Build the docker image of back-end
	docker-compose  -f back-end/docker-compose.yml build
	
build-front-nocache: ## Build the docker image of back-end
	docker-compose  -f front-end/docker-compose.yml build --no-cache

start-front: ## Build and Start the docker container of back-end
	docker-compose  -f front-end/docker-compose.yml up -d

stop-front: ## Stop the docker container of back-end
	docker-compose  -f front-end/docker-compose.yml stop


help: ## generate this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
