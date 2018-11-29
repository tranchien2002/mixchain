'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class OnlyShop {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, auth }, next) {
    if(!auth) {
      return response.status(403).send({'auth':false});
    }

    const {role} = auth.getUser();
    if(role !== Const.ROLE.REPAIRSHOP) {
      return response.status(403).send({'auth':'only repair shop'});
    }

    // call next to advance the request
    await next();
  }
}

module.exports = OnlyShop;
