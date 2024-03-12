import Customer from '../../models/Customer.js'

const customers = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    password: 'password123'
  },
  {
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice.smith@example.com',
    password: 'securePassword'
  },
  {
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob.johnson@example.com',
    password: 'strongPassword'
  },
  {
    firstName: 'Emily',
    lastName: 'Jones',
    email: 'emily.jones@example.com',
    password: 'p@ssw0rd'
  },
  {
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.brown@example.com',
    password: 'mike1234'
  }
]

const seedData = async (addressIds) => {
  const customersData = customers.map((customer, index) => ({
    ...customer,
    addressIds: [addressIds[index]]
  }))
  const newCustomers = await Customer.insertMany(customersData)
  console.log('Customers created successfully')
  const customerIds = newCustomers.map((obj) => String(obj._id))
  return customerIds
}

export default seedData
