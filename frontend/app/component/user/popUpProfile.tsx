
'use client'

import { IUser } from '@/app/interfaces/interfaces';
import UserProfileImageLogin from '../../../assets/userLogin.png'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import UploadImage from '../uploadImage';
import { useUserStore } from '@/app/zustandStore/useUserStore';
import Button from '../ui/Button';
interface PropsAddNewProduct {
    close: () => void | null,
    user: IUser | null
}


export default function PopUpProfile({ close, user }: PropsAddNewProduct) {
    const { updateUserById } = useUserStore();
    const [btnClicked, setBtnClicked] = useState<any>('Profile');
    const [toggleInputNewEmail, setToggleInputNewEmail] = useState<boolean>(false);
    const [imageProfile, setImageProfile] = useState<string | null>(null);
    const [emails, setEmails] = useState<Array<string>>([]);

    const handleSaveActions = () => {
        user && updateUserById(imageProfile, user._id);
    }

    const handleAddNewEmail = (e: any) => {
        if (emails.length === 2) return
        if (e.key === 'Enter') {
            setEmails([...emails, e.target.value]);
            e.target.value = ''
        }
    }

    const Menu: any = {
        Profile: () => ContentProfile(user),
        Email: () => ContentEmailAddress(),
    };

    const ContentProfile = (user: IUser | null) => {
        return (
            <WrapperProfile className="wrapperTitleRightSide">
                <div className="wrapper-image-name">

                    {user ? <span className='name'>{`${user?.firstName} ${user?.lastName} `} </span> : 'Name'}
                    {!imageProfile && <Image className='img-profile' src={user?.imageProfile ? user.imageProfile : UserProfileImageLogin} alt="User Profile" width={80} height={80} />}
                    {imageProfile && <Image className='img-profile' src={imageProfile} alt="User Profile" width={80} height={80} />}

                </div>

                <div className='wrapper-upload'>
                    <UploadImage imagesSelected={(images: any) => setImageProfile(images.blobs[0])} multipleFile={false} />
                </div>
            </WrapperProfile>

        )
    }

    const ContentEmailAddress = () => {
        return (
            <ContainerEmailAddress>

                <WrapperEmailAddress>
                    <WrapperIconAddEmail className="wrapper-icon-add-email" onClick={() => { setToggleInputNewEmail(true) }}>
                        <FaPlus className={'plus-icon'} />
                        <span>
                            {'Add new email address'}
                        </span>
                    </WrapperIconAddEmail>
                    <WrapperEmail className="wrapper-email">
                        <p>{`${user?.email}`}</p><span>Primary</span>
                        {emails && emails.map((email: string, index: number) =>
                            <span key={index}>{email}</span>)}
                        {(btnClicked === 'Email' && toggleInputNewEmail && emails.length < 2) ? <input type="text" autoFocus placeholder="Email Address" onKeyDown={(e) => handleAddNewEmail(e)} /> : null}
                    </WrapperEmail>

                </WrapperEmailAddress>
            </ContainerEmailAddress>
        )
    }

    return (
        <Container>
            <PopUp>
                <Link className='close' href={'/'}> go to store </Link>
                <LeftContent className="leftContent">
                    <ContainerLeftSide className={'containerLeftSide '}>
                        <WrapperTitleLeftSide className="wrapperTitleLeftSide">
                            <label>Account</label>
                            <p>Manage your account info</p>
                        </WrapperTitleLeftSide>

                        <ButtonsLeftSide>
                            {/* <button className="button" style={{ color: btnClicked === 'Profile' ? 'salmon' : '#ffffff' }} onClick={() => setBtnClicked('Profile')}>Profile</button>
                            <button className="button" style={{ color: btnClicked === 'Email' ? 'salmon' : '#ffffff' }} onClick={() => setBtnClicked('Email')}>Email</button> */}
                            <Button style={{ color: btnClicked === 'Profile' ? 'salmon' : '#ffffff' }} onClick={() => setBtnClicked('Profile')}>Profile</Button>
                            <Button style={{ color: btnClicked === 'Email' ? 'salmon' : '#ffffff' }} onClick={() => setBtnClicked('Email')}>Email</Button>
                        </ButtonsLeftSide>

                    </ContainerLeftSide>

                    <ContainerCopyRight className={'containerCopyRight '}>
                        <div>
                            <p className="copyRight"> Made In Romania by </p>
                            <p> <Link className="name-owner" href={'https://adelin-marin-portfolio.netlify.app/'} target='_blank'> <span className="name-owner">Adelin Marin</span></Link> © {new Date().getFullYear()} </p>
                        </div>
                    </ContainerCopyRight>
                </LeftContent>

                <RightContent className="rightContent">
                    <WrapperTitle className="wrapperTitleRightSide">
                        {btnClicked === 'Profile' && <label>Profile</label>}
                        {btnClicked === 'Email' && <label>Email addresses</label>}
                    </WrapperTitle>

                    <Content className="content">
                        {btnClicked && Menu[`${btnClicked}`]()}
                    </Content>
                    <WrapperSaveButton>
                        {/* <button className="save-button" onClick={() => { handleSaveActions() }}>Save Actions</button> */}
                        <Button onClick={() => { handleSaveActions() }}>Save Actions</Button>
                    </WrapperSaveButton>
                </RightContent>
            </PopUp>
        </Container >
    );
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    
    .close{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 10px;
        right: 10px;
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
    }
`

const PopUp = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width:auto;
    height: auto;
    width: 600px;
    height: 500px;
    border-radius: 10px;
    border-top:  1px solid salmon;
    box-shadow: 0 35px 60px -15px rgb(0 0 0 / 0.5);
    background: white;
`

const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    height: 100%;
    padding: 10px;
    border-right: solid 1px rgba(128, 128, 128, 0.145);
    /* background-color: green; */
`

const ContainerLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 50%;
    /* background-color: red; */
`

const WrapperTitleLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    /* width: 100%;
    height: 50%; */

    label{
        font-size: 20px;
        font-weight: bold;
        /* color: #ffffff;         */
      }
      
      p{
        font-size: 10px;
        font-weight: bold;
        /* color: #ffffff; */
    }
`

const ButtonsLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 15px 0px;
    
    button{
      padding: 5px 0px;
      min-width: 90px;
      font-size: 13px;    
      width:  80%;
      height: 30px;
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

    button:hover{
      cursor: pointer;
      border: 1px solid var(--button-border-hover);
    }
    
    button:active{
      background-color: var(--button-background-hover);
      color: var(--button-color-active);
    }
`

const ContainerCopyRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    /* color: #ffffff; */
    height: 50%;
    
    p{
        /* color: #ffffff; */
        font-size: 13px;
        text-align: center;
    }
    
    span{
        text-decoration: underline;
        color: var(--button-color);
    }
    `


//RIGHT CONTENT

const RightContent = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;    
    width: 70%;
    height: 100%;
    padding: 10px;
    /* background-color: blue; */
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
`

const WrapperSaveButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 50px;
    /* background-color: red; */

    button{
        padding: 5px 0px;
        min-width: 90px;
        font-size: 13px;  
        height: 25px;
        outline: none;
        border: none;
        border-radius: 5px;
        margin: 5px 0px;
        color: salmon;
        font-weight: bold;
        padding: 5px 0px;
        background-color: var(--button-color);
    }
    
    button:hover{
        cursor: pointer;
        border: 1px solid var(--button-border-hover);
    }
    
    button:active{
        color: var(--button-color-active);
        background-color: var(--button-background-hover);
    }
`

const WrapperTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #c7c7c7ba;

    label{
        font-size: 20px;
        font-weight: bold;
        /* color: #ffffff;         */
      }
      
      p{
        font-size: 10px;
        font-weight: bold;
        /* color: #ffffff; */
    }
`
const WrapperProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 15px 0px;
    /* border-bottom: 1px solid #c7c7c7ba; */
    
    label{
        font-size: 20px;
        font-weight: bold;
        /* color: #ffffff;         */
    }
    
    button{
        padding: 5px 0px;
        /* min-width: 90px; */
        font-size: 13px;    
        /* width:  60%; */
        height: 35px;
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
    
    button:hover{
        cursor: pointer;
        border: 1px solid var(--button-border-hover);
    }
    
    button:active{
        color: var(--button-color-active);
        background-color: var(--button-background-hover);
    }
    
    .wrapper-image-name{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50%;
    }

    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;}
    
    span{
        display: flex;
        justify-content: start;
        align-items: start;
        padding: 5px;
        font-weight: bold;
        font-size: 17px;
    }

    input {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 25px auto;
      color: transparent;
      width: 150px;
      height: 35px;
    }
    
    input::-webkit-file-upload-button {
        visibility: hidden;
    }
    
    input::before {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        content: "Upload image";
        white-space: nowrap;
        text-align: center;
        padding: 5px 0px;
        width: auto;
        height: auto;
        outline: none;
        border: none;
        border-radius: 5px;
        margin: 5px 0px;
        color: #ffffff;
        font-size: 13px;    
        font-weight: bold;
        padding: 5px 0px;
        background-color: var(--button-color);
    }

`

const ContainerEmailAddress = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-top: 15px;
    padding: 15px 0px;
    /* border-bottom: 1px solid #c7c7c7ba; */

    
    label{
        font-size: 13px;
        font-weight: bold;
        /* color: #ffffff;         */
      }
`

const WrapperEmail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 15px 0px;
    /* border-bottom: 1px solid #c7c7c7ba; */
    
    label{
        font-size: 13px;
        font-weight: bold;
    }
    
    p{
        font-size: 13px;
        font-weight: bold;    
    }

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        font-size: 13px;
        color: var(--button-color);
    }
`

const WrapperIconAddEmail = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 100%;
    color: var(--button-color);

    span{
        display: flex;
        justify-content: end;
        align-items: center;
        padding: 5px;
        font-size: 13px;
        cursor: pointer;
    }
`

const WrapperEmailAddress = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`