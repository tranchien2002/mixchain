'use strict';

const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
const Const = require('../../../config/const');

class PartnerController {
  async createVehicle({request, response, auth}) {
    try {
      const { id, email, username, role } = await auth.getUser();
      const { userid } = request.only(['id']);

      //connect to network with cardId
      let businessNetworkConnection = new BusinessNetworkConnection();
      await businessNetworkConnection.connect('' + id);
      const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

      //get member from the network
      let namespace = 'com.mixchain';
      let key = '.Member';
      if(role === Const.ROLE.REPAIRSHOP) {
        key = '.Partner';
      }

      const registry = await businessNetworkConnection.getParticipantRegistry(namespace + key);
      const participant = await registry.get('' + id);

      const tx = factory.newTransaction(namespace, 'CreateVehicle');
      tx.shop = factory.newRelationship(namespace, 'Partner', '' + id);
      tx.user = factory.newRelationship(namespace, 'Member', '' + userid);

      await businessNetworkConnection.submitTransaction(tx);

      //disconnect
      await businessNetworkConnection.disconnect('' + id);

      return {
        ok:true
      };
    } catch (error) {

      console.log(error);
      response.send('create Vehicle Fail');
    }
  }
}

module.exports = PartnerController;
