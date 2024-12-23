
'use client'

import UserProfileImageLogin from '../../../assets/userLogin.png'
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface PropsAddNewProduct {
    close: () => void | null,
}


export default function Notifications({ close }: PropsAddNewProduct) {

    return (
        <Container>
            <PopUp>
                <Link className='close' href={'/'}> X </Link>
                <LeftContent className="leftContent">
                    <ContainerLeftSide className={'containerLeftSide '}>
                        <WrapperTitleLeftSide className="wrapperTitleLeftSide">
                            <label>Account</label>
                            <p>Manage your account info</p>
                        </WrapperTitleLeftSide>

                        <ButtonsLeftSide>
                            {/* <button className="button">Profile</button> */}
                            {/* <button className="button">Security</button>
                            <button className="button">Notifications</button> */}
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
                    Notifications
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
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 5px;
        right: 10px;
        width: 25px;
        height: 25px;
        cursor: pointer;
        font-size: 15px;
        font-weight: bolder;
        border-radius: 50px;
        color: #ff0000;
        background-color:var(--button-color);
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
    
    .button{
      padding: 5px 0px;
      min-width: 90px;
      font-size: 13px;    
      width:  auto;
      min-height: 25px; 
      height: auto;
      outline: none;
      border: none;
      border-radius: 5px;
      margin: 5px 0px;
      background-color: var(--button-color);

    }

    button:hover{
      cursor: pointer;
      border: 1px solid var(--button-border-hover);
    }
    
    button:active{
        color: var(--button-color-active);
        background-color: var(--button-backgound-hover);
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
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 0px;
    border-bottom: 1px solid #c7c7c7ba;

    label{
        font-size: 20px;
        font-weight: bold;
        /* color: #ffffff;         */
      }

    button{
      padding: 5px 0px;
      min-width: 90px;
      font-size: 13px;    
      width:  auto;
      min-height: 25px; 
      height: auto;
      outline: none;
      border: none;
      border-radius: 5px;
      margin: 5px 0px;
      background-color: var(--button-color);

    }

    button:hover{
      cursor: pointer;
      border: 1px solid var(--button-border-hover);
    }
    
    button:active{
        color: var(--button-color-active);
        background-color: var(--button-backgound-hover);
    }

    .wrapper-image-name{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span{
        padding: 5px;
    }
`

const WrapperEmail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 0px;
    border-bottom: 1px solid #c7c7c7ba;

    
    label{
        font-size: 20px;
        font-weight: bold;
        /* color: #ffffff;         */
      }
`