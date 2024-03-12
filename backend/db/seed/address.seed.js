import Address from '../../models/Address.js'

const addresses = [
  {
    city: 'New York',
    state: 'New York',
    zipCode: '10001-123',
    contact: '+1 (123) 456-7890',
    streetAddress: '123 Main St',
    addressType: 'home'
  },
  {
    city: 'Los Angeles',
    state: 'California',
    zipCode: '90001-456',
    contact: '+1 (234) 567-8901',
    streetAddress: '456 Elm St',
    addressType: 'work'
  },
  {
    city: 'Chicago',
    state: 'Illinois',
    zipCode: '60601-789',
    contact: '+1 (345) 678-9012',
    streetAddress: '789 Oak St',
    addressType: 'office'
  },
  {
    city: 'Houston',
    state: 'Texas',
    zipCode: '77001-234',
    contact: '+1 (456) 789-0123',
    streetAddress: '234 Pine St',
    addressType: 'home'
  },
  {
    city: 'San Francisco',
    state: 'California',
    zipCode: '94101-567',
    contact: '+1 (567) 890-1234',
    streetAddress: '567 Maple St',
    addressType: 'work'
  },
  {
    city: 'Miami',
    state: 'Florida',
    zipCode: '33101-890',
    contact: '+1 (678) 901-2345',
    streetAddress: '890 Cedar St',
    addressType: 'office'
  },
  {
    city: 'Seattle',
    state: 'Washington',
    zipCode: '98101-234',
    contact: '+1 (789) 012-3456',
    streetAddress: '234 Birch St',
    addressType: 'other'
  }
]

const seedData = async () => {
  const newAddresses = await Address.insertMany(addresses)
  console.log('Addresses created successfully')
  const addressIds = newAddresses.map((obj) => String(obj._id))
  return addressIds
}

export default seedData
