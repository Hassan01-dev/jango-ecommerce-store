import Merchant from '../../models/Merchant.js'

const merchants = [
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

const seedData = async (addressIds: string[]) => {
  const merchantsData = merchants.map((merchant, index) => ({
    ...merchant,
    addressId: addressIds[index]
  }))
  const newMerchants = await Merchant.insertMany(merchantsData)
  console.log('Merchants created successfully')
  const merchantIds = newMerchants.map((obj) => String(obj._id))
  return merchantIds
}

export default seedData
