'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {
  Route.post('/auth/sign-in', 'AuthController.signIn');
  Route.post('/auth/register', 'AuthController.register');
  Route.post('/auth/token/refresh', 'AuthController.refreshToken');
  Route.post('/auth/logout', 'AuthController.logout');
}).prefix('api/v1');

Route.group(() => {
  Route.get('/user/me', 'UserController.getUser');

  // Route.post('/vehicle', 'VehicleController.store');
  Route.resource('/vehicle', 'VehicleController');

  // TODO: update daily
  Route.post('vehicle/:vin/metric', 'VehicleController.newMetric');

  Route.post('vehicle/:vin/invoices', 'VehicleController.createInvoice');

  // TODO: suggestion
  Route.get('vehicle/:vin/suggestions', 'VehicleController.suggestions');

  Route.post('/invoice/:id/complete', 'InvoiceController.checkComplete');

  // points exchange (proposed)
  Route.post('/points/transfer', 'UserController@transfer');

  // TODO: payment, everiToken or wokong pay

  // future: certificate
  Route.resource('/gear', 'GearController');
}).prefix('api/v1').middleware(['auth:jwt']);

Route.on('/').render('welcome');
