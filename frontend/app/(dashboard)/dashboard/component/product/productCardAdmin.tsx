import React from 'react'
import styled from 'styled-components'
import { IProduct } from '@/app/interfaces/interfaces';
import { useProductStore } from '@/app/zustandStore/useProductStore';
import { useRouter } from 'next/navigation';
import EditIcon from '../../../../../assets/edit_icon.svg';
import DeleteIcon from '../../../../../assets/delete_icon.svg';
import Image from 'next/image';
import EditProduct from './editProduct';

interface PropsProductCard {
    product: IProduct | null
}

export default function ProductCardAdmin({ product }: PropsProductCard) {
    const { name, color, price, brand, size, currency, gender, category, images, seller } = product as IProduct | any
    const { selectProduct } = useProductStore();
    const router = useRouter()
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        product && selectProduct(product._id)
        product && router.push(`/product-details/${product._id}`);
    };

    return (
        <Container className='container-product-card' style={{ overflow: `${open ? 'hidden' : 'auto'}` }}>

            <WrapperProductCard className='wrapper-product-card' >
                <img className='img-product-card' src={images[0].image} alt={product?.name} onClick={handleClick} />
                <p className='name'>{name}</p>
                <p className='color'>{color.color}</p>
                <p className='size'>{size.size}</p>
                <p className='price'>{price}{" "}{currency.currency}</p>
                <p className='brand'>{brand.brand}</p>
                <p className='seller'>{seller}</p>
                <p className='gender'>{gender.gender}</p>
                <p className='category'>{category.category}</p>

            </WrapperProductCard>

            {open && <EditProduct product={product as IProduct} user={null} close={() => setOpen(false)} />}

            <WrapperButtonsProductCard className='wrapper-buttons-product-card' >
                <Image className='button-edit' src={EditIcon} alt={'edit icon'} onClick={() => setOpen(!open)} />
                <Image className='button-delete' src={DeleteIcon} alt={'delete icon'} />
            </WrapperButtonsProductCard>


        </Container>
    )
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 110px;
    margin: 3px;
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
        margin: 5px 10px;
        border-radius: 10px;
        object-fit: cover;
        cursor: pointer;
    }

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 100%;
        margin: 5px;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
    }
`

const WrapperButtonsProductCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: auto;
    height: 100%;
    margin: auto;
    padding: 5px;
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
    
    .button-delete,
    .button-edit{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40px;
        padding: 5px;
        margin: 2px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }
`