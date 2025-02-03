'use client'

import ProductsList from '@/app/component/products/productList';
import { useMounted } from '@/app/component/useMounted';
import Loading from '@/app/loading';
import { useCategoryStore } from '@/app/zustandStore/useCategoryStore';
import { useProductStore } from '@/app/zustandStore/useProductStore';
import { useRouter } from 'next/router';
import styled from 'styled-components'


const ProductsPage = () => {
    const { categorySelected }: any = useCategoryStore();
    const { selectedProducts }: any = useProductStore();
    const { hasMounted } = useMounted()
    const router = useRouter()

    if(selectedProducts.length == 0) return router.push('/')
    if (!hasMounted)
        return <Loading />
    return (
        <Container className='home-container'>
            {<ProductsList products={selectedProducts} />}
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