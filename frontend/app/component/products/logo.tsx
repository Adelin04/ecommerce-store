'use client'

import LogoIcon from '../../../assets/logoIcon.svg'
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {


    return (
        <Container className="log-container">
            <Link className='link-logo' href="/">
                <Image className='img-logo' src={LogoIcon} alt='Logo'/>
                <LabelLogo> BOUTIQUE </LabelLogo>
            </Link>
        </Container>
    )
}

export default Logo;


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    .link-logo{
        display: flex;    
        justify-content: center;
        align-items: center;
        text-decoration: none;
        outline: none;
    }

    .img-logo{
        width: 50px;
        height: auto;
        cursor: pointer;
        background: var(--primary-color);
        border-radius: 50%;
    }

    @media (max-width: 400px) {
      .img-logo{
        transition: all 0.2s ease-in-out;
        width: 25px;
    }
  }
`

const LabelLogo = styled.label`
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    padding: 5px;
`