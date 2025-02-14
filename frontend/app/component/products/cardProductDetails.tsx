'use client'

import React, { useState } from 'react'
import { IProduct } from '@/app/interfaces/interfaces'
import styled from 'styled-components'
import Image from 'next/image'

export default function cardProductDetails({ product }: { product: IProduct }) {
    const [selectedImage, setSelectedImage] = useState(0)

    return (
        <Container className='container-product-details-card'>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>

                <WrapperProductCard className='wrapper-product-card' >
                    {product?.images.map((image: any, index: number) => {
                        return (
                            <div className='img-product-details-card' key={index}>
                                <Image className='img-product-card' src={image?.image} alt={product?.name} width={200} height={300} priority loading='eager' onClick={() => setSelectedImage(index)} />
                            </div>

                        )
                    })}
                </WrapperProductCard>

                <WrapperSelectedImage className='wrapper-selected-image'>
                    {product && <Image className='img-product-card-selected' src={product?.images[selectedImage].image} alt={product?.name} width={200} height={300} priority loading='eager' />}
                </WrapperSelectedImage>

            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 40px;
`

const WrapperProductCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    margin: auto;
    padding: 10px;
    border-radius: 10px;

    .img-product-details-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
        width: 200px;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }

    .img-product-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
        cursor: pointer;
    }

@media (max-width: 600px) {
    width: 100px;
}
`

const WrapperSelectedImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 70vh;
    margin: auto;
    padding: 10px;
    border-radius: 10px;
    
    .img-product-card-selected {
        position: relative;
        margin: 10px;
        width: auto;
        max-width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;

    }
`