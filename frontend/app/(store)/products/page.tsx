'use client'

import { fetchProducts } from '@/app/actions/productActions';
import ProductsList from '@/app/component/products/productList';
import { useMounted } from '@/app/component/useMounted';
import { IProduct } from '@/app/interfaces/interfaces';
import Loading from '@/app/loading';
import { useCategoryStore } from '@/app/zustandStore/useCategoryStore';
import { useProductStore } from '@/app/zustandStore/useProductStore';
import { useRouter } from 'next/router';
import { use, useEffect } from 'react';
import styled from 'styled-components'

const ProductsPage = () => {
    const { categorySelected }: any = useCategoryStore();
    const { selectedProducts, selectedByCategory, products, setProducts }: any = useProductStore();
    const { hasMounted } = useMounted()

    useEffect(() => {
        if (!selectedProducts)
            selectedByCategory(localStorage.getItem('category-selected'), localStorage.getItem('Gender')?.toLowerCase());
    }, [selectedByCategory])

    if (!hasMounted)
        return <Loading />

    return (
        <Container className='home-container'>
            {selectedProducts && <ProductsList products={selectedProducts} />}
            {selectedProducts && !selectedProducts.length && <ProductsList products={products.filter((product: IProduct) => product.category === localStorage.getItem('category-selected') && product.gender.gender === localStorage.getItem('Gender')?.toLowerCase()) } />}
        </Container>
    )
}

export default ProductsPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`