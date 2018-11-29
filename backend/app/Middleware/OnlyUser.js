'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Const = reuire('../../config/const.js');

class OnlyUser {
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
    if(role !== Const.ROLE.USER) {
      return response.status(403).send({'auth':'only user'});
    }

    // call next to advance the request
    await next();
  }
}

module.exports = OnlyUser;
