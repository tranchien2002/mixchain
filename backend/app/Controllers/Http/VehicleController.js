'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
const AdminConnection = require('composer-admin').AdminConnection;

/**
 * Resourceful controller for interacting with vehicles
 */
class VehicleController {

  async index({request, response}) {
  }


  /**
   * Create/save a new vehicle.
   * POST vehicles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    // TODO: validate
    try {
      const { id, email, username } = await auth.getUser();

      //connect to network with cardId
      let businessNetworkConnection = new BusinessNetworkConnection();
      await businessNetworkConnection.connect('' + id);

      //get member from the network
      let namespace = 'com.mixchain';
      const memberRegistry = await businessNetworkConnection.getParticipantRegistry(namespace + '.Member');
      const member = await memberRegistry.get('' + id);

      // TODO: add new vehicle

      //disconnect
      await businessNetworkConnection.disconnect('' + id);

      return member;
    } catch (error) {

      console.log(error);
      response.send('Missing or invalid jwt token');
    }
  }

  /**
   * Update vehicle details.
   * PUT or PATCH vehicles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    // todo update version
  }

  /**
   * Delete a vehicle with id.
   * DELETE vehicles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    // TODO: scrap vehicle
  }

  async createInvoice({params, request, reponse}) {
    // TODO: create invoices
  }
}

module.exports = VehicleController;
