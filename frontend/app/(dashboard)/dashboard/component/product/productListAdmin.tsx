import React from 'react'
import styled from 'styled-components';
import { IProduct } from '@/app/interfaces/interfaces';
import Loading from '@/app/loading';
import { useMounted } from '@/app/component/useMounted';
import ProductCard from '@/app/component/products/productCard';
import ProductCardAdmin from './productCardAdmin';

export default function ProductsListAdmin({ products }: any) {
    const { hasMounted } = useMounted()

    if (!hasMounted)
        return <Loading />
    return (
        <Container className='container-products-list'>
            <TableHead>
                <p className='name'>Name</p>
                <p className='color'>Color</p>
                <p className='size'>Size</p>
                <p className='price'>Price</p>
                <p className='currency'>Currency</p>
                <p className='brand'>Brand</p>
                <p className='seller'>Seller</p>
                <p className='gender'>Gender</p>
                <p className='category'>Category</p>

            </TableHead>
            <WrapperProductList className='wrapper-products-list'>

                {products && products.map((product: IProduct, index: number) =>
                    <ProductCardAdmin product={product} key={index} />
                )}
            </WrapperProductList>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
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

const TableHead = styled.div`
    position:fixed;
    top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 50px;
    padding: 5px 15px;
    border-bottom: 1px solid #c7c7c7ba;
    border-top: 1px solid #c7c7c7ba;
    border-radius: 10px;
    background-color: var(--secondary-color);
`