import React from 'react'
import styled from 'styled-components'
import { IProduct } from '@/app/interfaces/interfaces';
import { useProductStore } from '@/app/zustandStore/useProductStore';
import { useRouter } from 'next/navigation';
import EditIcon from '../../../../../assets/edit_icon.svg';
import DeleteIcon from '../../../../../assets/delete_icon.svg';
import Image from 'next/image';

interface PropsProductCard {
    product: IProduct | null
}

export default function ProductCardAdmin({ product }: PropsProductCard) {
    const { selectProduct } = useProductStore();
    const router = useRouter()
    console.log(product);

    const handleClick = () => {
        product && selectProduct(product._id)
        product && router.push(`/product-details/${product._id}`);
    };

    return (
        <Container className='container-product-card' onClick={handleClick}>

            <WrapperProductCard className='wrapper-product-card' >
                <img className='img-product-card' src={product?.image || product?.images[0].image} alt={product?.name} />
                <p className='name'>{product?.name}</p>
                <p className='color'>{product?.color.color}</p>
                <p className='size'>{product?.size.size}</p>
                <div>
                    <p className='price'>{product?.price}</p>
                    <p className='currency'>{product?.currency.currency}</p>
                </div>
                <p className='brand'>{product?.brand.brand}</p>
                <p className='seller'>{product?.seller}</p>
                <p className='gender'>{product?.gender.gender}</p>
                <p className='category'>{product?.category.category}</p>

            </WrapperProductCard>

            <WrapperButtonsProductCard className='wrapper-buttons-product-card' >
                <Image className='button-edit' src={EditIcon} alt={'edit icon'} />
                <Image className='button-delete' src={DeleteIcon} alt={'delete icon'} />
            </WrapperButtonsProductCard>

            {/* <WrapperDetailsProductCard className='wrapper-details-product-card' > */}
            {/* </WrapperDetailsProductCard> */}
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 3px;
    cursor: pointer;
    border: 1px solid salmon;
    border-radius: 10px;
`



const WrapperProductCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 100%;
    margin: auto;
    padding: 5px;
    border-radius: 10px;

    .img-product-card{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 100px;
        border-radius: 10px;
        object-fit: cover;
    }
`

const WrapperButtonsProductCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 100%;
    margin: auto;
    padding: 10px;
    border-radius: 10px;

    .button-edit, .button-delete{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }
    
  /*   .button-edit{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: #ffffff;
        cursor: pointer;
    }

    .button-delete{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: #ffffff;
        cursor: pointer;
    } */
`