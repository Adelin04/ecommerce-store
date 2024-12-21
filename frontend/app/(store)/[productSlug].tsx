import { useEffect } from 'react'
import styled from 'styled-components'
import ProductsList from '../component/products/productList';
import { useProductStore } from '@/app/zustandStore/useProductStore';

const ProductListPage = () => {
    const { selectedProduct } = useProductStore()

    useEffect(() => {

    }, [selectedProduct]);

    return (
        <Container className='clothing-container'>
            <ProductsList products={selectedProduct} />
        </Container>
    )
}

export default ProductListPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`