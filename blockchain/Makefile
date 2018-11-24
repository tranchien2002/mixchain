init:
	composer archive create --sourceType dir --sourceName . -a ./dist/mixchain-network.bna
	composer network install --card PeerAdmin@hlfv1 --archiveFile ./dist/mixchain-network.bna
	composer network start --networkName mixchain-network --networkVersion $(v) --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file ./dist/networkadmin.card
	composer card delete --card admin@mixchain-network
	composer card import --file ./dist/networkadmin.card
	composer network ping --card admin@mixchain-network

update:
	composer archive create --sourceType dir --sourceName . -a ./dist/mixchain-network.bna
	composer network install --card PeerAdmin@hlfv1 --archiveFile ./dist/mixchain-network.bna
	composer network upgrade --card PeerAdmin@hlfv1 -n mixchain-network -V $(v)
	composer card delete --card admin@mixchain-network
	composer card import --file ./dist/networkadmin.card
	composer network ping --card admin@mixchain-network
