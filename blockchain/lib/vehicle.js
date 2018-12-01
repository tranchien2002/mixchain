'use strict';

/**
 * createVehicle transaction
 * @param {com.mixchain.CreateVehicle} createVehicle
 * @transaction
 */
async function createVehicle(createVehicle) {
  const factory = getFactory()
  const assetReg = await getAssetRegistry('com.mixchain.Vehicle');   
  let existingAssets = await assetReg.getAll();
  
  let numberOfAssets = 0;
  await existingAssets.forEach(function (asset) {
    numberOfAssets ++;
  });
  let newAssetId =  numberOfAssets + 1;

  let vehicle = factory.newResource('com.mixchain', 'Vehicle', '' + newAssetId)
  vehicle.owner = factory.newRelationship(
    'com.mixchain',
    'Member',
    createVehicle.user.accountNumber
  );
  vehicle.vehicleStatus = "ACTIVE"
  let details = factory.newConcept('com.mixchain', 'VehicleDetails')
  details.make = "Toyota"
  details.modelType = "Camry"
  details.colour = "black"
  details.vin = '' + newAssetId
  vehicle.vehicleDetails = details
  await assetReg.add(vehicle);
}
