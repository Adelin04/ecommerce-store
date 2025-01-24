
'use client'

import Logo from '../../../../../assets/logoIcon.svg'
import Image from "next/image";
import styled from "styled-components";
import Button from '../../../../component/ui/Button';
import { useEffect, useState } from 'react';
import { ICurrency, IUser } from '@/app/interfaces/interfaces';
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

interface PropsCreateNewProduct {
    close: () => void | null,
    user: IUser | null
}


export default function CreateNewColor({ close, user }: PropsCreateNewProduct) {
    const { createNewProduct, loading } = useProductStore()
    const { getColors, colors } = useColorStore()
    const [message, setMessage] = useState('');

    const [productColor, setProductColor] = useState('');

    const resetFields = () => {
        setProductColor('');

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (useExistEmptyFields(productColor)) { setMessage('Please fill all the fields'); cleanMessage(); return }
    }


    useEffect(() => {
        getColors();
    }, [])


    return (
        <Container className='container-create-new-product'>
            <PopUp className='pop-up-create-new-product'>

                {loading && <WrapperLoading><Loading /></WrapperLoading>}

                <HeaderMenu label={'Create New Color'} children={message && <p className='message'>{message}</p>} onclick={() => close()}/>

                <Main className='main'>
                    <WrapperLabelsInputs className='wrapper-labels-inputs'>

                        <WrapperUnorderedList>
                            <div className='wrapper-title'>
                                <label >Available Color</label>
                            </div>
                            <div className='wrapper-ul'>
                                <ul className='ul'>
                                    {
                                        colors?.map((color: any, index: number) => {
                                            return (
                                                < li className='li' style={{}} key={index} value={color.color} > {color.color}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </WrapperUnorderedList>

                        <WrapperLabelInput>
                            <label >Color</label>
                            <input type={'text'} id='productColor' value={productColor} onChange={(e) => setProductColor(e.target.value)} />
                            <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                        </WrapperLabelInput>

                    </WrapperLabelsInputs>
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
    box-shadow: 0 35px 60px -15px rgb(0 0 0 / 0.5);
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
`

const WrapperUnorderedList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 5px;
    
    .wrapper-title{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        width: 100%;
    }
    
    .wrapper-ul{
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        margin: 5px;
        border: 1px solid salmon;
        border-radius: 10px;
        overflow-y: scroll;
    }

    .ul{
        display: flex;
        justify-content: center;
        align-items: start;
        flex-wrap: wrap;
        width: 100%;
        height: 150px;
        padding: 10px;
    }

    li{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        min-width: 70px;
        width: auto;
        height: auto;
        padding: 5px;
        margin: 5px;
        font-size: 12px;
        color: #ffffff;
        font-weight: bold;
        text-align: center;
        list-style-type: none;
        background-color:var(--button-color);
    }
`

const WrapperLabelsInputs = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: start;
    align-items: center;
    width:100%;
    height: 100%;
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
    label {
            margin: 0px 5px ;
            padding: 5px;
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