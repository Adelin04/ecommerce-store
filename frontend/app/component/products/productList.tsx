import React from 'react'
import styled from 'styled-components';
import ProductCard from '../../component/products/productsCard';
import { IProduct } from '@/app/interfaces/interfaces';

const ProductsList = ({ products }: any) => {

    return (
        <Container className='container-products-list'>
            <WrapperProductList className='wrapper-products-list'>
                {products && products.map((product: IProduct, index: number) =>
                    <ProductCard product={product} key={index} />
                )}
            </WrapperProductList>
        </Container>
    )
}

export default ProductsList

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    /* height: 100%; */
    margin: auto;
`

const WrapperProductList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin: auto;
`