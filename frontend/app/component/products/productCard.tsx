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

                {/* <WrapperProductCard className='wrapper-product-card' >
                </WrapperProductCard> */}
                <div className='wrapper-price'>
                    <p className='currency'>{product?.currency.currency}</p>
                    <p className='price'>{product?.price}</p>
                </div>
                
                <div>
                    <p className='name'>{product?.name}</p>
                    <p className='size'>{product?.size.size}</p>
                    <p className='seller'>{product?.seller}</p>
                </div>

                <Button>Add to cart</Button>
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
    
    .name{
        /* position: absolute; */
        color: white;
        top: 15px;
        left: 20px;
    }
    .color{
        /* position: absolute; */
        color: white;
        top: 30px;
        left: 20px;
    }

    .price{
        /* position: absolute; */
      /*   color: white;
        top: 270px;
        left: 20px; */
    }
    .currency {
        font-size: 20px;
    }

    .size{
        /* position: absolute; */
        color: white;
        top: 270px;
        right: 20px;
    }
    `

const WrapperProductCard = styled.div`
    position: relative;
    width: 100%;

    .wrapper-price {
        /* position: relative; */
        /* width: 100%; */
        font-size: 20px;
        font-weight: bold;
        background-color: var(--primary-color);
    }
    
    .currency,
    .price {
        /* position: absolute; */
        right: 0;
        top: 0;
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
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%);
   
    
    p {
        color: white;
        font-size: 12px;
    }
`   