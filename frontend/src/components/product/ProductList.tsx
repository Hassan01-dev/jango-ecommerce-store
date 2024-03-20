import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { ProductAttributes } from '../../utils/types/productTypes'
import { fetchAllProducts } from '../../actions/product'

const ProductList = () => {
  const [products, setProducts] = useState<ProductAttributes[]>([])

  useEffect(() => {
    fetchAllProducts()
      .then((res) => {
        if (res.success) {
          setProducts(res.data)
        } else {
          console.log(res.error)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product: ProductAttributes) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
