import React from 'react'
import styled from 'styled-components'
import { IProduct } from '@/app/interfaces/interfaces';
import { useProductStore } from '@/app/zustandStore/useProductStore';
import { useRouter } from 'next/router';

const ProductCard = ({product}: any) => {
    const { selectProduct } = useProductStore();
    // const router = useRouter()
    const { _id, name, image, price, color, size, currency, seller } = product

    const handleClick = () => {
        selectProduct(_id)
        // router.push(`/product-details/${_id}`);
    };

    return (
        <Container className='container-product-card' onClick={handleClick}>
            <WrapperProductCard className='wrapper-product-card' >
                <img className='img-product-card' src={image} alt={name} />
                <WrapperDetailsProductCard className='wrapper-details-product-card' >
                 {/*    <p className='name'>{name}</p>
                    <p className='price'>{price}</p>
                    <p className='color'>{color}</p>
                    <p className='size'>{size}</p>
                    <p className='currency'>{currency}</p>
                    <p className='seller'>{seller}</p> */}
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