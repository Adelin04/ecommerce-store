'use client'

import ProductCard from '@/app/component/products/productCard'
import { IProduct } from '@/app/interfaces/interfaces'
import { useProductStore } from '@/app/zustandStore/useProductStore'
import axios from 'axios'
import React, { useEffect } from 'react'

const ProductSlug = ({ params }: any) => {
    const { selectedProduct, getProductById }: any = useProductStore()
    const [product, setProduct] = React.useState<IProduct | null>(null)

    const fetchProductById = async (_id: string) => {
        const fetchProduct = await axios.get(`${process.env.DEV_URI}products/getProductById/${_id}`);
        setProduct(fetchProduct.data)
    }

    useEffect(() => {
        if (selectedProduct === null)
            fetchProductById(params.slug)

    }, [selectedProduct, params.slug])

    // useEffect(() => {
    //     if (selectedProduct === null)
    //         const fetchedProductById: any = async () => await fetchProductById(params.slug)
    //     setProduct(fetchProduct.data)

    // }, [selectedProduct, params.slug])

    return (
        <div>
            {<ProductCard product={selectedProduct || product} />}
        </div>
    )
}

export default ProductSlug