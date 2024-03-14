import User from '../../models/User.js'

const users = [
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

const seedData = async (addressIds: string[]) => {
  const usersData = users.map((user, index) => ({
    ...user,
    addressIds: [addressIds[index]]
  }))
  const newUsers = await User.insertMany(usersData)
  console.log('Users created successfully')
  const userIds = newUsers.map((obj) => String(obj._id))
  return userIds
}

export default seedData
