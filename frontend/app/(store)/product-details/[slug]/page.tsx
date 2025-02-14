'use client'

import { fetchProductById } from '@/app/actions/productActions'
import ProductCard from '@/app/component/products/productCard'
import { IProduct } from '@/app/interfaces/interfaces'
import { useProductStore } from '@/app/zustandStore/useProductStore'
import axios from 'axios'
import React, { useEffect, useLayoutEffect } from 'react'
import { redirect } from 'next/navigation'
import { useMounted } from '@/app/component/useMounted'
import Loading from '@/app/loading'
import CardProductDetails from '@/app/component/products/cardProductDetails'
import styled from 'styled-components'

const ProductSlug = ({ params }: any) => {
    const { hasMounted } = useMounted()
    const { selectedProduct }: any = useProductStore()
    const [afterRefreshPageProduct, setAfterRefreshPageProduct] = React.useState<IProduct | null>(null)

    async function fetchedProductById() {
        const getProductById: IProduct = await fetchProductById(params.slug.toString().trim()).then((data) => { return data });
        return getProductById
    }

    useEffect(() => {
        if (!selectedProduct) fetchedProductById().then((data) => setAfterRefreshPageProduct(data));
    }, [selectedProduct])

    if (!hasMounted)
        return <Loading />

    return (
        <Container className='container-product-details'>
            {!afterRefreshPageProduct && selectedProduct && <CardProductDetails product={selectedProduct} />}
            {!selectedProduct && afterRefreshPageProduct && <CardProductDetails product={afterRefreshPageProduct} />}
        </Container>
    )
}

export default ProductSlug

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`