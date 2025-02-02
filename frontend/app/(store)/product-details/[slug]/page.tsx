'use client'

import { fetchProductById } from '@/app/actions/productActions'
import ProductCard from '@/app/component/products/productCard'
import { IProduct } from '@/app/interfaces/interfaces'
import { useProductStore } from '@/app/zustandStore/useProductStore'
import axios from 'axios'
import React, { useEffect } from 'react'

const ProductSlug = ({ params }: any) => {
    const { selectedProduct, setProductById }: any = useProductStore()
    const [product, setProduct] = React.useState<IProduct | null>(null)

    /*     const fetchProductById = async (_id: string) => {
            const fetchProduct = await axios.get(`${process.env.DEV_URI}products/getProductById/${_id}`);
            setProduct(fetchProduct.data)
        } */

    useEffect(() => {

        if (selectedProduct === null) {
            const getProductById: any = async () => await fetchProductById(params.slug).then((data) => { console.log('data', data);});
            // console.log('getProductById', getProductById);
            
            setProductById(getProductById)
        }
        console.log('selectedProduct',selectedProduct);

    }, [selectedProduct])

    // useEffect(() => {
    //     if (selectedProduct === null)
    //         const fetchedProductById: any = async () => await fetchProductById(params.slug)
    //     setProduct(fetchProduct.data)

    // }, [selectedProduct, params.slug])

    return (
        <div>
            {selectedProduct && <ProductCard product={selectedProduct} />}
        </div>
    )
}

export default ProductSlug