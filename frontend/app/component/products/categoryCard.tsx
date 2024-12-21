'use client'

import styled from 'styled-components';
import { useProductStore } from '../../zustandStore/useProductStore';
import Link from 'next/link';
import Image from 'next/image';

const CategoryCard = ({ category }: any) => {

    const { selectedByCategory } = useProductStore();
    const name = category && category.category
    const { image } = category

    return (
        <Container className='container-product-card'>
            <Link className='link-product-card' href={`/${name}`} onClick={() => { selectedByCategory(name, category.gender.gender) }} >
                <WrapperProductCard className='wrapper-product-card' >
                    <WrapperImage className='wrapper-image' >
                        <Image className='img-card' priority src={image} alt={name} width={200} height={300} />
                    </WrapperImage>
                    <WrapperDetailsProductCard className='wrapper-details-product-card' >
                        <p className='name'>{name}</p>
                    </WrapperDetailsProductCard>
                </WrapperProductCard>
            </Link>
        </Container>
    )
}

export default CategoryCard;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px;
    margin: 40px;
    cursor: pointer;
    
    .img-card {
        z-index: 1;
        width: 200px;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }
    
    .name{
        z-index: 10;
        position: absolute;
        color: white;
        top: 15px;
        left: 20px;
        font-size: 20px;
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

const WrapperImage = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    overflow: hidden;
    border-radius: 15px;
    width: 200px;
    height: 300px;
    
    img:hover{
        scale: 1.2;
        transition: all 1s ease-in-out;
}
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

`   