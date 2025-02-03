'use client'

import { fetchProductById } from '@/app/actions/productActions'
import ProductCard from '@/app/component/products/productCard'
import { IProduct } from '@/app/interfaces/interfaces'
import { useProductStore } from '@/app/zustandStore/useProductStore'
import axios from 'axios'
import React, { useEffect, useLayoutEffect } from 'react'

const ProductSlug = ({ params }: any) => {
    const { selectedProduct, setProductById }: any = useProductStore()
    const [product, setProduct] = React.useState<IProduct | null>(null)

    /*     const fetchProductById = async (_id: string) => {
            const fetchProduct = await axios.get(`${process.env.DEV_URI}products/getProductById/${_id}`);
            setProduct(fetchProduct.data)
        } */

    async function fetchedProductById() {
        const getProductById: any = await fetchProductById(params.slug.toString().trim()).then((data) => { return data });

        console.log('getProductById', getProductById);
        setProductById(getProductById)
    }

    useLayoutEffect(() => {
        if (selectedProduct === null) fetchedProductById()

            console.log('product', product);
            
    }, [selectedProduct])

    // useEffect(() => {
    //     if (selectedProduct === null)
    //         const fetchedProductById: any = async () => await fetchProductById(params.slug)
    //     setProduct(fetchProduct.data)

    // }, [selectedProduct, params.slug])

    return (
        <div>
            {console.log('selectedProduct', selectedProduct)}
            {selectedProduct && <ProductCard product={selectedProduct} />}
        </div>
    )
}

export default ProductSlug