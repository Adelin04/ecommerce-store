import React from 'react'
import styled from 'styled-components'
import { IProduct } from '@/app/interfaces/interfaces';
import { useProductStore } from '@/app/zustandStore/useProductStore';
import { useRouter } from 'next/navigation';

interface PropsProductCard {
    product: IProduct | null
}

const ProductCard = ({ product }: PropsProductCard) => {
    console.log(product);
    
    const { selectProduct } = useProductStore();
    const router = useRouter()

    const handleClick = () => {
        product && selectProduct(product._id)
        product && router.push(`/product-details/${product._id}`);
    };

    return (
        <Container className='container-product-card' onClick={handleClick}>
            <WrapperProductCard className='wrapper-product-card' >
                <img className='img-product-card' src={product?.image || product?.images[0].image} alt={product?.name} />
                <WrapperDetailsProductCard className='wrapper-details-product-card' >
                    <p className='name'>{product?.name}</p>
                    <p className='price'>{product?.price}</p>
                    <p className='color'>{product?.color.color}</p>
                    <p className='size'>{product?.size.size}</p>
                    <p className='currency'>{product?.currency.currency}</p>
                    <p className='seller'>{product?.seller}</p>
                </WrapperDetailsProductCard>
            </WrapperProductCard>
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
    height: 300px;
    margin: 40px;
    cursor: pointer;
    
    .img-product-card {
        z-index: 0;
        width: 200px;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }
    
    .name{
        position: absolute;
        color: white;
        top: 15px;
        left: 20px;
    }
    .color{
        position: absolute;
        color: white;
        top: 30px;
        left: 20px;
    }

    .price{
        position: absolute;
        color: white;
        top: 270px;
        left: 20px;
    }
    .currency{
        position: absolute;
        color: white;
        top: 270px;
        left: 40px;
        padding-left: 5px;
    }

    .size{
        position: absolute;
        color: white;
        top: 270px;
        right: 20px;
    }
    `

const WrapperProductCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100%;
    margin: auto;
    padding: 10px;
    border-radius: 10px;
`
const WrapperDetailsProductCard = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
    
    p {
        color: white;
        font-size: 12px;
    }
`   