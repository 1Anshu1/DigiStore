import { useEffect, useState } from 'react'
import { useParams, useLocation, useSearchParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { ProductCard } from "../components/ProductCard"
import BrandFilter from "../components/productList/BrandFilter"
import PriceFilter from "../components/productList/PriceFilter"
import RatingFilter from "../components/productList/RatingFilter"
import ContentWrapper from "../components/ContentWrapper"
import { getAllProductAction } from '../redux/features/productSlice.js'

const ProductList = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const {data, loading, error} = useSelector(state => state.product)
  const category = useParams().category
 

  const [searchParams, setSearchParams] = useSearchParams()
  const [filterArray, setFilterArray] = useState([])

  const handleSortOrder = (e) => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('sort', e.target.value)
    setSearchParams(newSearchParams)
  }

  useEffect(() => {
    dispatch(getAllProductAction(`${category}${location.search}`))
  }, [location])


  //TODO: remove the checked mark from clicking on filter criteria tags
  // const removeFilter = (e) => {
  //   console.log(e.target.parentNode)
  //   e.target.parentNode.style.display = 'none'
  // }

  return (
    <ContentWrapper>
      <div className="my-10 flex">

        {/* Filter criteria */}
        <div className="px-5 w-80 bg-primaryGreen border-[2px] border-gray">
          <div className="">
            <div className="font-bold my-3">Brand</div>
            <BrandFilter filterArray={filterArray} setFilterArray={setFilterArray} />
          </div>
          <div className="border-y-[2px] border-y-gray ">
            <PriceFilter />
          </div>
          <div className="">
            <RatingFilter />
          </div>
        </div>


        <div className="px-5 w-full">
          <button className='bg-primaryGreen border-2'>Filter</button>
          <div className="flex gap-5">
            {
              filterArray.map((item, idx) => {
                return (
                  <div key={idx} className="flex gap-5 border-2 border-primaryGreen w-fit">
                    <div className="">{item}</div>
                    {/* <div className="cursor-pointer" onClick={removeFilter}>X</div> */}
                  </div>
                )
              })
            }
          </div>
          <div className="font-bold text-xl">{category}</div>
          <div className="flex justify-between items-center">
            <div className="">Viewing (1-20) of {data && data.count} Products</div>
            <div className="">
              <label htmlFor="sortOrder" className="px-2">Sort By :</label>
              <select id="sortOrder" className="text-sm border-2 border-black rounded-md outline-none p-1" onChange={handleSortOrder}>
                <option value="whatNew">What&#8217;s new</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          <div className="grid grid-row-4 grid-cols-3 grid-flow-row-dense gap-5 mt-5">
            {
               data && data?.map((item) => (
                <ProductCard key={item._id} item={item} />
              ))
            }
          </div>
        </div>
      </div>
    </ContentWrapper>

  )
}

export default ProductList