
'use client'

import Logo from '../../../../../assets/logoIcon.svg'
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Button from '../../../../component/ui/Button';
import { useState } from 'react';
import { IUser } from '@/app/interfaces/interfaces';
import { TfiEmail } from 'react-icons/tfi';
import { MdOutlinePassword } from 'react-icons/md';
import UploadImage from '@/app/component/uploadImage';
import { useCategoryStore } from '@/app/zustandStore/useCategoryStore';
import HeaderMenu from '../ui/headerMenu';
import { useProductStore } from '@/app/zustandStore/useProductStore';
import { useExistEmptyFields } from '@/app/utils/useExistEmptyFields';

interface PropsCreateNewProduct {
    close: () => void | null,
    user: IUser | null
}


export default function CreateNewProduct({ close, user }: PropsCreateNewProduct) {
    const { createNewProduct } = useProductStore()
    const { categories } = useCategoryStore()
    const [btnClicked, setBtnClicked] = useState<any>('Change Password');
    const [message, setMessage] = useState('');
    const [sizesProductAvailable, setSizesProductAvailable] = useState(['S', 'M', 'L', 'XL']);

    const [productName, setProductName] = useState('');
    const [productColor, setProductColor] = useState('');
    const [productDescription, setDescriptionProduct] = useState('');
    const [productPrice, setProductPrice] = useState<number | string>(0);
    const [productBrand, setProductBrand] = useState('');
    const [productCode, setProductCode] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productStock, setProductStock]: any = useState(1);
    const [productCategory, setProductCategory] = useState('');
    const [selectedPictures, setSelectedPictures]: any = useState(null);
    const [listOfProductAdded, setListOfProductAdded] = useState([]);

    const resetFields = () => {
        setProductName('');
        setProductColor('');
        setDescriptionProduct('');
        setProductPrice('');
        setProductBrand('');
        setProductSize('');
        setProductStock(1);
        setProductCategory('');
        setProductCode('');
        setSelectedPictures(null)
    }

    const handleClickCloseButton = (e: any) => {
        e.preventDefault();
        resetFields();
        close();
    }

    const handleSaveActions = async () => {
        // if (useExistEmptyFields(productName, productColor, productDescription, productPrice, productBrand, productCode, productSize, productStock, productCategory)) { setMessage('Please fill all the fields'); return }

        const newProduct = new FormData();
        newProduct.append('name', productName);
        newProduct.append('color', productColor);
        newProduct.append('description', productDescription);
        newProduct.append('price', parseFloat(productPrice.toLocaleString()).toFixed(2));
        newProduct.append('brand', productBrand);
        newProduct.append('code', productCode);
        newProduct.append('size', productSize);
        newProduct.append('stock', productStock);
        newProduct.append('category', productCategory);

        
        // append all images to formData
        // [...selectedPictures.files].map((file) => { newProduct.append('image', file) })
        for (let index = 0; index < selectedPictures.files.length; index++) {
            let image = selectedPictures.files[index];
            newProduct.append(`image`, image);
        }

        await fetch(`${process.env.DEV_URI}products/createProduct`, {
            method: 'POST',
            body: newProduct
        })
        // user?.isAdmin && createNewProduct(newProduct)
        //     .then((response) => {
        //         console.log(response);
        //         const { success, message }: any = response;
        //         setMessage(message);
        //     });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newProduct = new FormData();
        newProduct.append('name', productName);
        newProduct.append('color', productColor);
        newProduct.append('description', productDescription);
        newProduct.append('price', parseFloat(productPrice.toLocaleString()).toFixed(2));
        newProduct.append('brand', productBrand);
        newProduct.append('code', productCode);
        newProduct.append('size', productSize);
        newProduct.append('stock', productStock);
        newProduct.append('category', productCategory);

        
        // append all images to formData
        // [...selectedPictures.files].map((file) => { newProduct.append('image', file) })
        for (let index = 0; index < selectedPictures.files.length; index++) {
            let image = selectedPictures.files[index];
            newProduct.append(`image`, image);
        }

        await fetch(`${process.env.DEV_URI}products/createProduct`, {
            method: 'POST',
            body: newProduct
        })
    }

    return (
        <Container className='container-create-new-product'>
            <PopUp className='pop-up-create-new-product'>
                <HeaderMenu linkText={'go to store'} label={'Create New Product'} children={null} />
                {message && <p className='message'>{message}</p>}

                <Main>
                    <form onSubmit={(e) => { handleSubmit(e) }} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>


                        <WrapperLabelsInputs className='wrapper-labels-inputs'>
                            <div className='zone_1' style={{ width: '100%' }}>
                                <WrapperLabelInput>
                                    <label >Name</label>
                                    <input type={'text'} autoFocus={true} value={productName} id={'productName'} onChange={(e) => { setProductName(e.target.value) }} />
                                    <TfiEmail style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                                </WrapperLabelInput>

                                <WrapperLabelInput>
                                    <label >Color</label>
                                    <input type={'text'} value={productColor} id={'productColor'} onChange={(e) => { setProductColor(e.target.value) }} />
                                    <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                                </WrapperLabelInput>

                                <WrapperLabelInput>
                                    <label >Description</label>
                                    <input type={'text'} value={productDescription} id={'productDescription'} onChange={(e) => { setDescriptionProduct(e.target.value) }} />
                                    <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                                </WrapperLabelInput>

                                <WrapperLabelInput>
                                    <label >Price</label>
                                    <input type={'number'} value={productPrice} id={'productPrice'} onChange={(e) => { setProductPrice(e.target.value) }} />
                                    <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                                </WrapperLabelInput>

                                <WrapperLabelInput>
                                    <label >Brand</label>
                                    <input type={'text'} value={productBrand} id={'productBrand'} onChange={(e) => { setProductBrand(e.target.value) }} />
                                    <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                                </WrapperLabelInput>

                                <WrapperLabelInput>
                                    <label >Unique Code</label>
                                    <input type={'text'} value={productCode} id={'productCode'} onChange={(e) => { setProductCode(e.target.value) }} />
                                    <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                                </WrapperLabelInput>

                                <WrapperLabelInput>
                                    <label >Stock</label>
                                    <input type={'number'} value={productStock} id={'productStock'} onChange={(e: any) => { e.target.value >= 0 && setProductStock(e.target.value) }} />
                                    <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                                </WrapperLabelInput>

                                <WrapperLabelInput>

                                    <div className='wrapper-size-category'>

                                        <div className='wrapper-size'>
                                            <label>Size Product</label>
                                            <select className='select-size' value={productSize} onChange={(e) => setProductSize(e.target.value)}>
                                                < option value={'None'} > None </option>
                                                {
                                                    sizesProductAvailable?.map((size: any, index: number) => {
                                                        return (
                                                            < option key={index} value={size} > {size}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>

                                        <div className='wrapper-category'>
                                            <label>Category Product</label>
                                            <select className='select-category' value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
                                                < option value={'None'} > None</option>
                                                {
                                                    categories && categories.map((category: any, index: number) => {
                                                        const { category: name } = category
                                                        return (
                                                            < option key={index} value={name} > {name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>

                                    </div>

                                </WrapperLabelInput>
                            </div>

                            <div className='zone_2' style={{ width: '100%' }}>
                                <label className="label-picture">Picture Product</label>

                                <WrapperImages className="wrapper-images">

                                    <div className="left-images">
                                        <div className="img_1"><Image width={100} height={100} src={selectedPictures !== null && selectedPictures.blobs[0] || Logo} alt="img 1" /></div>
                                        <div className="img_2"><Image width={100} height={100} src={selectedPictures !== null && selectedPictures.blobs[1] || Logo} alt="img 2" /></div>
                                    </div>

                                    <div className="right-images">
                                        <div className="img_3"><Image width={100} height={100} src={selectedPictures !== null && selectedPictures.blobs[2] || Logo} alt="img 3" /></div>
                                        <div className="img_4"><Image width={100} height={100} src={selectedPictures !== null && selectedPictures.blobs[3] || Logo} alt="img 4" /></div>
                                    </div>

                                </WrapperImages>

                            </div>

                        </WrapperLabelsInputs>

                    </form>
                    <UploadImage imagesSelected={(images: any) => setSelectedPictures(images)} multipleFile={true} />

                </Main>

                <Footer>
                    <Button style={{ color: 'salmon', }} onClick={(e) => { handleSubmit(e) }}>Save Actions</Button>
                </Footer>

            </PopUp>
        </Container >
    );
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    label {
        font-weight: bold;
    }

    .close{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 0px;
        min-width: 90px;
        font-size: 13px;    
        width:  auto;
        height: 25px;
        /* height: auto; */
        outline: none;
        border: none;
        border-radius: 5px;
        margin: 5px 0px;
        color: #ffffff;
        font-weight: bold;
        padding: 5px 0px;
        background-color: var(--button-color);
    }

    .close:hover{
      cursor: pointer;
      border: 1px solid var(--button-border-hover);
    }
    
    .close:active{
      background-color: var(--button-background-hover);
      color: var(--button-color-active);
    }  background-color:var(--button-color);

`

const PopUp = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width:auto;
    height: auto;
    width: 600px;
    height: 550px;
    border-radius: 10px;
    border-top:  1px solid salmon;
    box-shadow: 0 35px 60px -15px rgb(0 0 0 / 0.5);
    background: white;
`
const Main = styled.div`
    display:grid;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    /* background-color: green; */
`

const WrapperLabelsInputs = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width:100%;
    height: auto;
    margin: auto;
    border-radius: 5px;
    
    
    label {
        color: grey;
        font-size: 12px;
        width: 99%;
        margin: 1px 0px;
        padding-left: 2px;
        text-align:left;
    }
    
    input{
        width: 100%;
        height: 30px;
        outline: none;
        border: none;
        border-radius: 5px;
        margin: 0px;
        color: black;
        text-align:center;
        border: 1px solid grey;
    }
    
    ::placeholder{
        color: #ffffff;
        font-size: 10px;
    }
    
    .zone_1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 5px;
     
    }
    
    .zone_2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 5px;
        /* background-color: var(--secondary-color); */

        label{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 5px 0px;
            padding: 5px;
        }
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


    .wrapper-category{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const WrapperImages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;

    .left-images {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 5px;

        img {
            margin: 10px;
        }
    }
    
    .right-images {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 5px;

        img {
            margin: 10px;
        }
    }
`

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 5px 15px;
`