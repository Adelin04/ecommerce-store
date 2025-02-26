import React from 'react'
import styled from 'styled-components'
import { IProduct } from '@/app/interfaces/interfaces';
import { useProductStore } from '@/app/zustandStore/useProductStore';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';
import usePriceFormatted from '@/app/utils/usePriceFormatted';

interface PropsProductCard {
    product: IProduct | null
}

const ProductCard = ({ product }: PropsProductCard) => {

    const { selectProduct } = useProductStore();
    const router = useRouter()

    // console.log(product?.price);


    function handleClick() {
        product && selectProduct(product._id);
        product && router.push(`/product-details/${product._id}`);
    }

    return (
        <Container className='container-product-card'>

            <img className='img-product-card' src={product?.images[0].image} alt={product?.name} onClick={handleClick} />

            <WrapperDetailsProductCard className='wrapper-details-product-card' >

                <WrapperPrice className='wrapper-price' >
                    <div className='container-price'>
                        <span className='currency'>{product?.currency.currency}</span>
                        <span className='price'>{usePriceFormatted({ price: product?.price || null })}</span>
                    </div>
                </WrapperPrice>

                <WrapperName className='wrapper-name'>
                    <span className='name'>{product?.name}</span>
                </WrapperName >

            </WrapperDetailsProductCard>

        </Container>
    )
}

export default ProductCard

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    height: 400px;
    margin: 40px;
    /* border: 1px solid black; */
    border-radius: 10px;
    border-top:transparent;
    
    .img-product-card {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        z-index: 0;
        width: 100%;
        height: 300px;
        border-radius: 10px;
        object-fit: cover;
        cursor: pointer;
    }
`

const WrapperPrice = styled.div`
    position: relative;
    display: flex;
    justify-content: end;
    align-items: start;
    width: 100%;
    height: 100%;
    
    .container-price {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        top: 0;
        right: 0;
        border-top-right-radius: 5px;
        /* background-color: green; */
        background-color: var(--button-color);
    }

    .currency,
    .price {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        padding: 5px;
        font-size: 15px;
        font-weight: bold;
        color: white;
    }

`
const WrapperDetailsProductCard = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 35%;
    margin: auto;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0) -5%, black 70%);
   

    .name{
        /* position: absolute; */
        color: white;
        top: 15px;
        left: 20px;
    }

`

const WrapperName = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-align: center;

`