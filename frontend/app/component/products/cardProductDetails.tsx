'use client'

import React, { use, useState } from 'react'
import { IProduct } from '@/app/interfaces/interfaces'
import styled from 'styled-components'
import Image from 'next/image'
import usePriceFormatted from '@/app/utils/usePriceFormatted'
import Button from '../ui/Button'

export default function cardProductDetails({ product }: { product: IProduct }) {
    const [selectedImage, setSelectedImage] = useState(0)
    const [productSize, setProductSize] = useState('');
    const [sizesProductAvailable, setSizesProductAvailable] = useState(['S', 'M', 'L', 'XL']);

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

                <WrapperProductCart className='wrapper-product-cart'>
                    <WrapperSelectedImage className='wrapper-selected-image'>
                        {product && <Image className='img-product-card-selected' src={product?.images[selectedImage].image} alt={product?.name} width={200} height={300} priority loading='eager' />}

                        <div className='details-product-card'>
                            <p className='name'>{product?.name}</p>
                            <div className='container-price'>
                                <span className='currency'>{product?.currency.currency}</span>
                                <span className='price'>{usePriceFormatted({ price: product?.price || null })}</span>
                            </div>
                        </div >

                        <div className='wrapper-description-product-card' >
                            <p className='description'>{product?.description}{product?.description}</p>
                        </div>

                        <div className='wrapper-add-to-cart'>

                            <WrapperLabelInput>
                                {/* <label>Size Product</label> */}
                                <select className='select-size' value={productSize} onChange={(e) => setProductSize(e.target.value)}>
                                    < option value={"None"} > None </option>
                                    {
                                        sizesProductAvailable?.map((size: any, index: number) => {
                                            return (
                                                < option key={index} value={size} > {size}</option>
                                            )
                                        })
                                    }
                                </select>
                            </WrapperLabelInput>

                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <Button style={{ width: '30%' }} className='button-add-to-cart'> Add to cart </Button>
                            </div>

                        </div>
                    </WrapperSelectedImage>



                </WrapperProductCart>
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

const WrapperLabelInput = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;

    .wrapper-size-category {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 5px;
        
        label {
            margin: 0px 5px ;
            padding: 5px;
        }
        
        option {
            background-color: #ffffff;
        }
    }

    .wrapper-size{
        display: flex;
        justify-content: center;
        align-items: center;

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
        height: 60%;
        border-radius: 10px;
        object-fit: cover;

    }

    .details-product-card {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin: 5px;
        color: white;
        font-size: 15px;
        font-weight: bold;
    }

    .container-price {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .name,
    .currency,
    .price {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 15px;
        font-weight: bold;
        padding: 5px;
        }

        

    .wrapper-description-product-card {
        width: 100%;
        max-height: 150px;
        margin: 5px;
        text-align: justify;
        color: white;
        font-size: 15px;
        font-weight: bold;
        overflow: auto;
        padding: 10px;
        background-color: var(--secondary-color);
        border-radius: 10px;
    }

    .description {
        color: white;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }

    .wrapper-add-to-cart {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        margin: 5px auto;
        border-radius: 10px;

    }
    .select-size {
        text-align: center;
        width: 70%;
        border:none;
        /* color: white; */
        font-size: 15px;
        font-weight: bold;
        outline: none;
        background-color: var(--primary-color);
    }
`

const WrapperProductCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 10px;
    border-radius: 10px;
`