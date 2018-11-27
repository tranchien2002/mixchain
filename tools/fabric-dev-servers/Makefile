reset:
	./stopFabric.sh
	docker rm $(shell docker ps -aq)
	docker rmi $(shell docker images dev-* -q)
	rm -rf ~/.composer
	./startFabric.sh
	./createPeerAdminCard.sh