
'use client'

import Logo from '../../../../../assets/logoIcon.svg'
import Image from "next/image";
import styled from "styled-components";
import Button from '../../../../component/ui/Button';
import { useEffect, useState } from 'react';
import { IProduct, IUser } from '@/app/interfaces/interfaces';
import { TfiEmail } from 'react-icons/tfi';
import { MdOutlinePassword } from 'react-icons/md';
import UploadImage from '@/app/component/uploadImage';
import { useCategoryStore } from '@/app/zustandStore/useCategoryStore';
import HeaderMenu from '../ui/headerMenu';
import { useProductStore } from '@/app/zustandStore/useProductStore';
import { useExistEmptyFields } from '@/app/utils/useExistEmptyFields';
import { useCurrencyStore } from '@/app/zustandStore/useCurrencyStore';
import { useColorStore } from '@/app/zustandStore/useColorStore';
import { useBrandStore } from '@/app/zustandStore/useBrandStore';
import { useGenderStore } from '@/app/zustandStore/useGenderStore';
import Loading from '@/app/loading';
import FooterMenu from '../ui/footerMenu';
import { useSizeStore } from '@/app/zustandStore/useSizeSore';
import { useRouter } from 'next/navigation';

interface PropsEditProduct {
    close: () => void | null,
    user: IUser | null
    product: IProduct
}


export default function EditProduct({ close, user, product }: PropsEditProduct) {
    const router = useRouter()
    const{ updateProduct,loading } = useProductStore();
    const [message, setMessage] = useState('');
    const { getCurrencies, currencies } = useCurrencyStore()
    const { getBrands, brands } = useBrandStore()
    const { getColors, colors } = useColorStore()
    const { getGenders, genders } = useGenderStore()
    const { categories } = useCategoryStore()
    const [sizesProductAvailable, setSizesProductAvailable] = useState(['S', 'M', 'L', 'XL']);

    const [productName, setProductName] = useState(product.name);
    const [productColor, setProductColor] = useState(product.color.color);
    const [productDescription, setProductDescription] = useState(product.description);
    const [productPrice, setProductPrice] = useState<number | string>(product.price);
    const [productBrand, setProductBrand] = useState(product.brand);
    const [productCode, setProductCode] = useState(product.code);
    const [productSize, setProductSize] = useState(product.size.size);
    const [productStock, setProductStock]: any = useState(product.stock);
    const [productCategory, setProductCategory] = useState(product.category);
    const [productCurrency, setProductCurrency] = useState<any>(product.currency.currency);
    const [productGender, setProductGender] = useState<string>(product.gender.gender);
    const [productImages, setProductImages]: any = useState(product.images.map((image: any) => image.image));
    const [selectedPictures, setSelectedPictures]: any = useState(null);
    const [listOfProductAdded, setListOfProductAdded] = useState([]);

    const resetFields = () => {
        setProductName('');
        setProductColor('');
        setProductDescription('');
        setProductPrice('');
        setProductBrand('');
        setProductCode('');
        setProductSize('');
        setProductStock(1);
        setProductCategory('');
        setProductCurrency('');
        setProductGender('');
        setSelectedPictures(null);

        cleanMessage();
    }

    const cleanMessage = () => {
        setTimeout(() => setMessage(''), 3000)
    }

    const handleClickCloseButton = (e: any) => {
        e.preventDefault();
        resetFields();
        close();
    }

    const handleSaveActions = async () => {


    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (useExistEmptyFields(productName, productColor, productDescription, productPrice, productBrand, productCode, productSize, productStock, productCategory)) { setMessage('Please fill all the fields'); cleanMessage(); return }

        const updatedProduct = new FormData();
        updatedProduct.append('name', productName);
        updatedProduct.append('color', productColor);
        updatedProduct.append('description', productDescription);
        updatedProduct.append('price', parseFloat(productPrice.toLocaleString()).toFixed(2));
        updatedProduct.append('brand', productBrand);
        updatedProduct.append('code', productCode);
        updatedProduct.append('size', productSize);
        updatedProduct.append('stock', productStock);
        updatedProduct.append('category', productCategory);
        updatedProduct.append('currency', productCurrency);
        updatedProduct.append('gender', productGender);


        // append all images to formData

        // 1st method
        // [...selectedPictures.files].map((file) => { newProduct.append('image', file) })

        // 2nd method
        // for (let index = 0; index < selectedPictures.files.length; index++) {
        //     let image = selectedPictures.files[index];
        //     newProduct.append(`image`, image);
        // }

        // 3rd method
        for (const file of selectedPictures.files) {
            updatedProduct.append('image', file)
        }

        await updateProduct(updatedProduct).then((response) => {
            console.log(response);

            if (response.success) {
                setMessage('Product created successfully');
                resetFields();
            }
        })
    }


    useEffect(() => {

    }, [])


    return (
        <Container className='container-create-new-product'>
            <PopUp className='pop-up-create-new-product'>

                {loading && <WrapperLoading><Loading /></WrapperLoading>}

                <HeaderMenu label={'EditProduct'} children={message && <p className='message'>{message}</p>} onclick={() => close()} />

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
                                    <label >Description</label>
                                    <input type={'text'} value={productDescription} id={'productDescription'} onChange={(e) => { setProductDescription(e.target.value) }} />
                                    <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                                </WrapperLabelInput>

                                <WrapperLabelInput>
                                    <label >Price</label>
                                    <input type={'number'} value={productPrice} id={'productPrice'} onChange={(e) => { setProductPrice(e.target.value) }} />
                                    <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                                </WrapperLabelInput>

                                <WrapperLabelInput>
                                    <label >Unique Code</label>
                                    <input type={'text'} value={productCode} id={'productCode'} onChange={(e) => { setProductCode(e.target.value) }} />
                                    <Button type={'button'} className='generate-code' onClick={() => setProductCode(Math.random().toString(36).slice(2))}>generate</Button>
                                    <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                                </WrapperLabelInput>

                                <WrapperLabelInput>
                                    <label >Stock</label>
                                    <input type={'number'} value={productStock} id={'productStock'} onChange={(e: any) => { e.target.value >= 0 && setProductStock(e.target.value) }} />
                                    <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                                </WrapperLabelInput>

                                <WrapperLabelInput>
                                    <label >Brand</label>
                                    <select className='select-brand' value={productBrand} onChange={(e) => setProductBrand(e.target.value)}>
                                        < option value={'None'} > None </option>
                                        {
                                            brands?.map((brand: any, index: number) => {
                                                return (
                                                    < option key={index} value={brand.brand} > {brand.brand}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                                </WrapperLabelInput>


                                <WrapperLabelInput>
                                    <label >Color</label>
                                    <select className='select-color' value={productColor} onChange={(e) => setProductColor(e.target.value)}>
                                        < option value={'None'} > None </option>
                                        {
                                            colors?.map((color: any, index: number) => {
                                                return (
                                                    < option key={index} value={color.color} > {color.color}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                                </WrapperLabelInput>

                                <WrapperLabelInput>
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
                                </WrapperLabelInput>

                                <WrapperLabelInput>
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
                                </WrapperLabelInput>

                                <WrapperLabelInput>
                                    <label>Currency Product</label>
                                    <select className='select-currency' value={productCurrency} onChange={(e) => setProductCurrency(e.target.value)}>
                                        < option value={'None'} > None</option>
                                        {
                                            currencies && currencies.map((currency: any, index: number) => {
                                                const { currency: name } = currency
                                                return (
                                                    < option key={index} value={name} > {name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </WrapperLabelInput>

                                <WrapperLabelInput>
                                    <label>Gender Product</label>
                                    <select className='select-gender' value={productGender} onChange={(e) => setProductGender(e.target.value)}>
                                        < option value={'None'} > None</option>
                                        {
                                            genders && genders.map((gender: any, index: number) => {
                                                const { gender: name } = gender
                                                return (
                                                    < option key={index} value={name} > {name}</option>
                                                )
                                            })
                                        }
                                    </select>
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

                <FooterMenu >
                <Button style={{ margin: '5px', }} onClick={()=>{router.push('/')}}>go to store</Button>
                    <Button style={{ color: 'salmon', }} onClick={(e) => { handleSubmit(e) }}>Save Actions</Button>
                </FooterMenu>

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

    .go-to-store{
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

    .close,
    .go-to-store:hover{
      cursor: pointer;
      border: 1px solid var(--button-border-hover);
    }
    
    .go-to-store:active{
      background-color: var(--button-background-hover);
      color: var(--button-color-active);
    }  

    .message{
        font-size: 17px;
        font-weight: bold;
    }
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
    /* box-shadow: 0 35px 60px -15px rgb(0 0 0 / 0.5); */
    background: white;
`
const WrapperLoading = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index:10;
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
    
   select, input{
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

    .generate-code{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 20px;
        top: 20px;
        cursor: pointer;
        font-size: 12px;
        width : 20px;
        height: 20px;
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

