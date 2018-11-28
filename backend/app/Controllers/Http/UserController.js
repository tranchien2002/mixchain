'use strict';

const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
const AdminConnection = require('composer-admin').AdminConnection;
const { BusinessNetworkDefinition, CertificateUtil, IdCard } = require('composer-common');

class UserController {
  async getUser({ response, auth }) {
    try {
      const { id, email, username } = await auth.getUser();

      //connect to network with cardId
      let businessNetworkConnection = new BusinessNetworkConnection();
      await businessNetworkConnection.connect('' + id);

      //get member from the network
      let namespace = 'com.mixchain';
      const memberRegistry = await businessNetworkConnection.getParticipantRegistry(namespace + '.Member');
      const member = await memberRegistry.get('' + id);

      //disconnect
      await businessNetworkConnection.disconnect('' + id);

      return member;
    } catch (error) {

      console.log(error);
      response.send('Missing or invalid jwt token');
    }
  }
}

module.exports = UserController;
