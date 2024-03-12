import Supplier from '../../models/Supplier.js'

const suppliers = [
  {
    name: 'ABC Suppliers',
    email: 'abc@example.com',
    password: 'supplierpass',
    website: 'https://www.abcsuppliers.com',
    sku: 'ABC',
    socialMedia: [
      {
        url: 'https://www.facebook.com/abcsuppliers',
        name: 'Facebook'
      },
      {
        url: 'https://www.twitter.com/abcsuppliers',
        name: 'Twitter'
      }
    ]
  },
  {
    name: 'XYZ Enterprises',
    email: 'xyz@example.com',
    password: 'xyzpass123',
    website: 'https://www.xyzenterprises.com',
    sku: 'XYZ',
    socialMedia: [
      {
        url: 'https://www.linkedin.com/company/xyzenterprises',
        name: 'LinkedIn'
      },
      {
        url: 'https://www.instagram.com/xyzenterprises',
        name: 'Instagram'
      }
    ]
  }
]

const seedData = async (addressIds) => {
  const suppliersData = suppliers.map((supplier, index) => ({
    ...supplier,
    addressId: addressIds[index]
  }))
  const newSuppliers = await Supplier.insertMany(suppliersData)
  console.log('Suppliers created successfully')
  const supplierIds = newSuppliers.map((obj) => String(obj._id))
  return supplierIds
}

export default seedData
