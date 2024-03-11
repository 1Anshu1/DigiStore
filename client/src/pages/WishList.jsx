import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductCard } from '../components/ProductCard'
import ContentWrapper from '../components/ContentWrapper'
import { useSelector } from 'react-redux'

const WishList = () => {
    const wishlist = useSelector((state) => state.wishlist.data)
    const [product, setProduct] = useState()

    useEffect(() => {
        const fetchWishlist = async () => {
            const token = JSON.parse(localStorage.getItem("ecommerce-token"));
            const { data } = await axios.get(
                "http://localhost:8000/api/v1/user/wishlist",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(data)
            setProduct(data.wishlistProducts)
        }
        fetchWishlist()
    }, [wishlist])


    return (
        <ContentWrapper>
            <div className="font-bold text-2xl">{`My WishList (${wishlist?.length || 0})`}</div>
            <div className="flex">
                {
                    product && product.map((item) => (
                        // console.log(item)
                        <ProductCard key={item._id} item={item} />
                        ))
                }
            </div>
        </ContentWrapper>
    )
}

export default WishList
