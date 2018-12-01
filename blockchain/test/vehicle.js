'use strict';

const Util = require('./util');

const NS = 'com.mixchain';

describe('Setup', () => {
  let businessNetworkConnection;
  let factory;

  beforeEach(async () => {
    businessNetworkConnection = await Util.deployAndConnect();
    factory = businessNetworkConnection.getBusinessNetwork().getFactory();

    const member = factory.newResource(NS, 'Member', '1') 
    member.firstName = '1';
    member.lastName = '1';
    member.email = '1';
    member.phoneNumber = '1';
    member.points = 0;

    const partner = factory.newResource(NS, 'Partner', '2');
    partner.name = '2';

    const pm = await businessNetworkConnection.getParticipantRegistry(
        NS + '.Member'
    );
    await pm.addAll([member]);

    const pp = await businessNetworkConnection.getParticipantRegistry(
        NS + '.Partner'
    );
    await pp.addAll([partner]);
  });

  it('should create a scenario', async () => {
    const allVehicles = await businessNetworkConnection.query('selectVehicles', {id: '1'});
  })

  it('New Vehicle', async () => {
    const tx = factory.newTransaction(NS, 'CreateVehicle');
    tx.shop = factory.newRelationship(NS, 'Partner', '2');
    tx.user = factory.newRelationship(NS, 'Member', '1');

    await businessNetworkConnection.submitTransaction(tx);
  })
});