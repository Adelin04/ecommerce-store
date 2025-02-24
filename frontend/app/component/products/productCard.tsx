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

    console.log(product?.price);


    function handleClick() {
        product && selectProduct(product._id);
        product && router.push(`/product-details/${product._id}`);
    }

    return (
        <Container className='container-product-card'>
            {/* <WrapperProductCard className='wrapper-product-card' >
            </WrapperProductCard> */}
            <img className='img-product-card' src={product?.images[0].image} alt={product?.name} onClick={handleClick} />
            <WrapperDetailsProductCard className='wrapper-details-product-card' >
                <p className='name'>{product?.name}</p>
                <p className='size'>{product?.size.size}</p>
                <div className='wrapper-price'>
                    <p className='currency'>{product?.currency.currency}</p>
                    <p className='price'>{usePriceFormatted({ price: product?.price || null })}</p>
                </div>
                <p className='seller'>{product?.seller}</p>
            </WrapperDetailsProductCard>

            <Button>Add to cart</Button>
        </Container>
    )
}

export default ProductCard

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: auto;
    margin: 40px;
    border: 1px solid #c7c7c7ba;
    border-radius: 10px;
    border-top:transparent;
    
    .img-product-card {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        z-index: 0;
        width: 100%;
        height: 250px;
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
    /* position: relative; */
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 200px;
    height: 100%;
    margin: auto;
    padding: 10px;
    border-radius: 10px;

    `
const WrapperDetailsProductCard = styled.div`
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
    
    .wrapper-price{
        display: flex;
        justify-content: left;
        align-items: center;
        width:100%;
    }


    p {
        color: white;
        font-size: 12px;
    }
`   