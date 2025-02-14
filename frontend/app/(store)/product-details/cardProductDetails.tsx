import React from 'react'
import { IProduct } from '@/app/interfaces/interfaces'
import styled from 'styled-components'
import Image from 'next/image'

export default function cardProductDetails({ product }: { product: IProduct }) {
    return (
        <Container>
            <WrapperProductCard className='wrapper-product-card' >
                {product?.images.map((image: any, index: number) => {
                    return (
                        <div key={index}>
                            <Image className='img-product-card' src={image.image} alt={product?.name} width={200} height={300} loading='eager' />
                        </div>
                    )
                })}
            </WrapperProductCard>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px;
    margin: 40px;
    cursor: pointer;
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