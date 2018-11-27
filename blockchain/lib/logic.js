/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/* global getParticipantRegistry emit */


/**
 * EarnPoints transaction
 * @param {com.mixchain.EarnPoints} earnPoints
 * @transaction
 */
async function EarnPoints(earnPoints) {

  //update member points
  earnPoints.member.points = earnPoints.member.points + earnPoints.points;

  //update member
  const memberRegistry = await getParticipantRegistry('com.mixchain.Member');
  await memberRegistry.update(earnPoints.member);

  // check if partner exists on the network
  const partnerRegistry = await getParticipantRegistry('com.mixchain.Partner');
  let partnerExists = await partnerRegistry.exists(earnPoints.partner.id);
  if (partnerExists === false) {
    throw new Error('Partner does not exist - check partner id');
  }

}


/**
 * UsePoints transaction
 * @param {com.mixchain.UsePoints} usePoints
 * @transaction
 */
async function UsePoints(usePoints) {

  //check if member has sufficient points
  if (usePoints.member.points < usePoints.points) {
    throw new Error('Insufficient points');
  }

  //update member points
  usePoints.member.points = usePoints.member.points - usePoints.points;

  //update member
  const memberRegistry = await getParticipantRegistry('com.mixchain.Member');
  await memberRegistry.update(usePoints.member);

  // check if partner exists on the network
  const partnerRegistry = await getParticipantRegistry('com.mixchain.Partner');
  let partnerExists = await partnerRegistry.exists(usePoints.partner.id);
  if (partnerExists === false) {
    throw new Error('Partner does not exist - check id');
  }
}


/**
 * RepairBegin transaction
 * @param {com.mixchain.RepairBegin} repairBegin
 * @transaction
 */
async function RepairBegin(repairBegin) {
  console.log('RepairBegin');

  // update status
  const assetRegistry = await getAssetRegistry('com.mixchain.Vehicle');
  const vehicle = await assetRegistry.get(repairBegin.vehicle.getIdentifier());
  vehicle.vehicleStatus = 'REPAIRING';

  // log
  const shop = repairBegin.shop;
  const vehicleRepairLogEntry = factory.newConcept('com.mixchain.VehicleRepairLogEntry');
  vehicleRepairLogEntry.vehicle = factory.newRelationship(
    'com.mixchain.Vehicle',
    vehicle.getIdentifier()
  );
  vehicleRepairLogEntry.shop = factory.newRelationship(
    'com.mixchain.Partner',
    shop.getIdentifier()
  );
  vehicleRepairLogEntry.timestamp = repairBegin.timestamp;
  vehicleRepairLogEntry.description = repairBegin.description;
  vehicleRepairLogEntry.type = "begin";
  if (!vehicle.logEntries) {
    vehicle.logEntries = [];
  }
  vehicle.reapairLogEntries.push(vehicleRepairLogEntry);
  await assetRegistry.update(vehicle);

  // check if partner exists on the network
  const partnerRegistry = await getParticipantRegistry('com.mixchain.Partner');
  let partnerExists = await partnerRegistry.exists(repairBegin.shop.id);
  if (partnerExists === false) {
    throw new Error('Partner does not exist - check partner id');
  }
}

/**
 * RepairEnd transaction
 * @param {com.mixchain.RepairEnd} repairEnd
 * @transaction
 */
async function RepairEnd(repairEnd) {
  console.log('RepairEnd');

  // update status
  const assetRegistry = await getAssetRegistry('com.mixchain.Vehicle');
  const vehicle = await assetRegistry.get(repairEnd.vehicle.getIdentifier());
  vehicle.vehicleStatus = 'ACTIVE';

  // log
  const shop = repairEnd.shop;
  const vehicleRepairLogEntry = factory.newConcept('com.mixchain.VehicleRepairLogEntry');
  vehicleRepairLogEntry.vehicle = factory.newRelationship(
    'com.mixchain.Vehicle',
    vehicle.getIdentifier()
  );
  vehicleRepairLogEntry.shop = factory.newRelationship(
    'com.mixchain.Partner',
    shop.getIdentifier()
  );
  vehicleRepairLogEntry.timestamp = repairEnd.timestamp;
  vehicleRepairLogEntry.description = repairEnd.description;
  vehicleRepairLogEntry.type = "end";
  if (!vehicle.logEntries) {
    vehicle.logEntries = [];
  }
  vehicle.reapairLogEntries.push(vehicleRepairLogEntry);
  await assetRegistry.update(vehicle);

  //update member points
  repairEnd.vehicle.owner.points = repairEnd.vehicle.owner.points + repairEnd.points;
  const memberRegistry = await getParticipantRegistry('com.mixchain.Member');
  await memberRegistry.update(repairEnd.vehicle.owner);

  // check if partner exists on the network
  const partnerRegistry = await getParticipantRegistry('com.mixchain.Partner');
  let partnerExists = await partnerRegistry.exists(repairEnd.shop.id);
  if (partnerExists === false) {
    throw new Error('Partner does not exist - check partner id');
  }
}

/**
 * UpdateMetric transaction
 * @param {com.mixchain.UpdateMetric} updateMetric
 * @transaction
 */
async function UpdateMetric(updateMetric) {
  console.log('UpdateMetric')

  const assetRegistry = await getAssetRegistry('com.mixchain.Vehicle');
  const vehicle = await assetRegistry.get(updateMetric.vehicle.getIdentifier());

  const vehicleMetricLogEntry = factory.newConcept('com.mixchain.VehicleMetricLogEntry');
  vehicleMetricLogEntry.vehicle = factory.newRelationship(
    'com.mixchain.Vehicle',
    vehicle.getIdentifier()
  );
  vehicleMetricLogEntry.timestamp = updateMetric.timestamp;
  vehicleMetricLogEntry.fuelUsed = updateMetric.fuelUsed;
  vehicleMetricLogEntry.tirePressure = updateMetric.tirePressure;
  if (!vehicle.logEntries) {
    vehicle.logEntries = [];
  }
  vehicle.reapairLogEntries.push(vehicleMetricLogEntry);
  await assetRegistry.update(vehicle);
}

// TODO: check payment from api
async function CheckPayment(tx) {}