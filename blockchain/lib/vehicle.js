'use strict';

/**
 * EarnPoints transaction
 * @param {com.mixchain.CreateVehicle} tx
 * @transaction
 */
async function createVehicle(tx) {
  const assetReg = await getAssetRegistry('com.mixchain.Vehicle');   
  let existingAssets = await assetReg.getAll();
  
  let numberOfAssets = 0;
  await existingAssets.forEach(function (asset) {
    numberOfAssets ++;
  });
  let newAssetId =  numberOfAssets + 1;

  let vehicle = factory.newResource('com.mixchain.Vehicle')
  vehicle.vin = '' + newAssetId
  vehicle.shop = factory.newRelationship(
    'com.mixchain',
    'Partner',
    tx.shop.id
  );
  vehicle.user = factory.newRelationship(
    'com.mixchain',
    'Member',
    tx.user.accountNumber
  );
  await memberRegistry.add(vehicle);
}