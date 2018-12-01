/**
 * Setup demo
 * @param {com.mixchain.SetupDemo} setupDemo
 * @transaction
 */

async function setupDemo(setupDemo) {
  console.log("Setup demo")
  const factory = getFactory();
  const names = [
    'dan',
    'simon',
    'jake',
    'anastasia',
    'matthew',
    'mark',
    'fenglian',
    'sam',
    'james',
    'nick',
    'caroline',
    'rachel',
    'john',
    'rob',
    'tom',
    'paul',
    'ed',
    'dave',
    'anthony',
    'toby',
    'ant',
    'matt',
    'anna'
  ];
  const vehicles = {
    Arium: {
      Nova: [
        {
          vin: '156478954',
          colour: 'white',
          vehicleStatus: 'ACTIVE'
        }
      ],
      Nebula: [
        {
          vin: '652345894',
          colour: 'blue',
          vehicleStatus: 'ACTIVE'
        }
      ]
    },
    Morde: {
      Putt: [
        {
          vin: '6437956437',
          colour: 'black',
          vehicleStatus: 'ACTIVE'
        },
        {
          vin: '857642213',
          colour: 'red',
          vehicleStatus: 'ACTIVE'
        },
        {
          vin: '542376495',
          colour: 'silver',
          vehicleStatus: 'ACTIVE'
        }
      ],
      Pluto: [
        {
          vin: '976431649',
          colour: 'white',
          vehicleStatus: 'ACTIVE'
        },
        {
          vin: '564215468',
          colour: 'green',
          vehicleStatus: 'ACTIVE'
        },
        {
          vin: '784512464',
          colour: 'grey',
          vehicleStatus: 'ACTIVE'
        }
      ]
    },
    Ridge: {
      Cannon: [
        {
          vin: '457645764',
          colour: 'red',
          vehicleStatus: 'ACTIVE'
        },
        {
          vin: '312457645',
          colour: 'white',
          vehicleStatus: 'ACTIVE'
        },
        {
          vin: '65235647',
          colour: 'silver',
          vehicleStatus: 'ACTIVE'
        }
      ],
      Rancher: [
        {
          vin: '85654575',
          colour: 'blue',
          vehicleStatus: 'ACTIVE'
        },
        {
          vin: '326548754',
          colour: 'white',
          vehicleStatus: 'ACTIVE'
        }
      ]
    }
  };

  //register partner
  const partners = Object.keys(vehicles).map(name => {
    return factory.newResource('com.mixchain', 'Partner', name)
  })
  const partnerReg = await getParticipantRegistry('com.mixchain.Partner');
  await partnerReg.addAll(partners)

  //register member
  const members = names.map(name => {
    return factory.newResource('com.mixchain', 'Member', name)
  });
  const memberReg = await getParticipantRegistry('com.mixchain.Member');
  await memberReg.addAll(members)

  //register vehicle
  const vs = []
  let carCount = 0;
  for (const mName in vehicles) {
    const partner = vehicles[mName];
    for (const mModel in partner) {
      const model = partner[mModel]
      for (let i = 0; i < model.length; i++) {
        const vehicleTemplate = model[i]
        const vehicle = factory.newResource(
          'com.mixchain',
          'Vehicle',
          vehicleTemplate.vin
        );
        vehicle.owner = factory.newRelationship(
          NS,
          'Member',
          names[carCount]
        );
        vehicle.vehicleStatus = vehicleTemplate.vehicleStatus;
        vehicle.vehicleDetails = factory.newConcept('com.mixchain', 'VehicleDetails');
        vehicle.vehicleDetails.make = mName;
        vehicle.vehicleDetails.modelType = mModel;
        vehicle.vehicleDetails.colour = vehicleTemplate.colour;
        vehicle.vehicleDetails.vin = vehicleTemplate.vin;
        
        const logEntry = factory.newConcept('com.mixchain', 'VehicleTransferLogEntry');
        logEntry.vehicle = factory.newRelationship(
          'com.mixchain',
          'Vehicle',
          vehicleTemplate.vin
        );
        logEntry.buyer = factory.newRelationship(
          'com.mixchain',
          'Member',
          names[carCount]
        );
        logEntry.timestamp = setupDemo.timestamp;

        vehicle.logEntries.push(logEntry);

        vs.push(vehicle);
        carCount++;
      }
    }
  }
  const vehicleRegistry = await getAssetRegistry('com.mixchain' + '.Vehicle');
  await vehicleRegistry.addAll(vs);
}