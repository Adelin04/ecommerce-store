'use client'

import Link from 'next/link';
import { useState } from 'react'
import { FaArrowDown, FaArrowUp, FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import styled from 'styled-components';
import Button from './ui/Button';

const Footer = () => {
    const [emailSubscriber, setEmailSubscriber] = useState<string>('')
    const [checkTerms, setCheckTerms] = useState<any>(false)
    const [toogleArraw, setToogleArraw] = useState<boolean>(false)

    const handlerNewsletter = () => {
        if (!checkTerms) {
            return alert('Please accept terms and conditions')
        }

        if (!emailSubscriber) {
            return alert('Please enter email')
        }

        setEmailSubscriber('')
    }

    const handleClickArrow = () => {
        setToogleArraw(!toogleArraw)
    }

    /* window.scroll({
        bottom: screen.height,
        // left: 100,
        behavior: "smooth",
    }); */

    return (
        <Container className={"footer-container"} style={{ height: toogleArraw ? 'auto' : '30px', transition: 'all 0.5s ease-in-out' }}>

            <WrapperArrowUp className={'wrapperArrowUp'} onClick={handleClickArrow}>
                <p className='button-about-us'> {!toogleArraw ? 'More' : 'Less'} </p>
                {toogleArraw ? <FaArrowDown /> : <FaArrowUp />}
            </WrapperArrowUp>

            <ContainerSocialMedia className={'containerSocialMedia'} style={{ display: toogleArraw ? 'flex' : 'none', transition: 'all 0.5s ease-in-out' }}>

                <WrapperSocialMediaIconsCopyRight className={'wrapperSocialMediaIconsCopyRight'}>

                    <WrapperSocialMediaIcons className={'wrapperSocialMediaIcons'} >
                        <Link className={'linkIconSocialMedia '} href={'/'} >
                            <FaFacebook className={'iconSocialMedia'} />
                        </Link >

                        <Link className={'linkIconSocialMedia'} href={'/'} >
                            <FaInstagram className={'iconSocialMedia'} />
                        </Link >

                        <Link className={'linkIconSocialMedia'} href={'/'} >
                            <FaYoutube className={'iconSocialMedia'} />
                        </Link >

                        <Link className={'linkIconSocialMedia '} href={'/'} >
                            <FaMailBulk className={'iconSocialMedia '} />
                        </Link >

                    </WrapperSocialMediaIcons>

                    <ContainerCopyRight className={'containerCopyRight '}>
                        <p className="copyRight"> Made In Romania by <Link className="name-owner" href={'https://adelin-marin-portfolio.netlify.app/'} target='_blank'> <span className="name-owner">Adelin Marin</span></Link> © {new Date().getFullYear()} </p>
                    </ContainerCopyRight>
                </WrapperSocialMediaIconsCopyRight>



                <ContainerNewsletter className={'containerNewsletter'}>

                    <h3 className={'title '}> Newsletter </h3>

                    <WrapperNewsletter className={'wrapperNewsletter'}>
                        <input
                            className={'inputNewsletter '}
                            placeholder="E-mail Address"
                            value={emailSubscriber}
                            id={emailSubscriber}
                            type={"email"}
                            onChange={(e) => setEmailSubscriber(e.target.value)}
                        />

                        <Button onClick={handlerNewsletter}>Subscribe</Button>
                    </WrapperNewsletter>

                    <WrapperTerms className={'terms'}>

                        <CheckBoxContainer className='checkBoxContainer '>
                            <input className='checkBox ' type="checkbox" value={checkTerms} onChange={(e) => { setCheckTerms(e.target.checked) }} />
                            <p className='checkBox-terms-and-conditions'>I agree to all terms and conditions</p>
                        </CheckBoxContainer>

                        <Link href={'/'} className="readTerms">Read the terms and conditions</Link>

                    </WrapperTerms>


                </ContainerNewsletter>
            </ContainerSocialMedia>



        </Container>
    )
}

export default Footer

const Container = styled.div`
    /* position: fixed; */
    bottom: 0px;
    width: 100%;
    background-color: var(--secondary-color);
    padding-top: 30px;
    padding-bottom: 10px;
    border-top: 1px solid var(--border-color);
    z-index: 100;
    position: relative;
`
const WrapperArrowUp = styled.div`
    position:absolute;
    top:0;
    right: 0px;
    min-width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--primary-color);
    cursor: pointer;
    border-bottom-left-radius: 5px;
    font-size: 25px;
    color: #ffffff;
    
    .button-about-us {
        display: flex;
        justify-content: center;
        align-items: end;
        text-align: center;
        padding-right: 10px;
        font-size: 13px;
        font-weight: 500;
        color: #ffffff;
    }
    `

const ContainerSocialMedia = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 90%;
        
    @media (max-width: 600px) {
        flex-direction: column;
        padding-top: 10px;

        .containerNewsletter{
            order: -1;
        }
  }
`

const WrapperSocialMediaIconsCopyRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100px;
    /* background-color: red; */
`

const WrapperSocialMediaIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    /* background-color: green; */

    .linkIconSocialMedia{
        display: flex;
        text-decoration: none;
        color: #ffffff;
        font-size: auto;
        font-weight: 500;
        cursor: pointer;        
    }
    
    .iconSocialMedia{
        font-size: 40px;
        cursor: pointer;
        color: #ffffff;
        padding: 10px;
    }    
`

const ContainerCopyRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    height: 50%;

    p{
        color: #ffffff;
        font-size: 13px;
        text-align: center;
    }

    span{
        text-decoration: underline;
        color: var(--button-color);
    }
`

const ContainerNewsletter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
    /* background-color: red; */

    .title{
        color: #ffffff;
        font-size: 20px;
        text-align: center;
        padding: 5px;
    }

    .terms-and-conditions{
        color: #ffffff;
        font-size: 10px;
    }

`

const CheckBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    min-width: 100%;
    height: auto;
    /* background-color: red; */

    p{
        display: flex;
        text-align: center;
        color: #ffffff;
        font-size: 10px;
        padding-left: 10px;
    }
    
    input{
        cursor: pointer;
        color: #ffffff;
        font-size: 10px;
        width: auto;
        height: auto;
    }
    `

const WrapperNewsletter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* background-color: green; */    
    
    input{
        text-align: center;
        color : #ffffff;
        outline: none;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid var(--border-color);
    }
    `
const WrapperTerms = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    /* background-color: green; */
    
    .readTerms{
        text-align: center;
        font-size: 10px;
        text-decoration: none;
        color: #ffffff;
        width: auto;
        padding-top: 10px;
        border-bottom: 1px solid var(--border-color);
    }
`