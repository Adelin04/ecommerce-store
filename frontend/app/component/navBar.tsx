'use client'

import styled from 'styled-components';
import Logo from './logo';
// import UserProfile from './UserProfile.jsx';
import { useEffect, useState } from 'react';
import { useCategoryStore } from '../zustandStore/useCategoryStore';
import { useProductStore } from '../zustandStore/useProductStore';
import Link from 'next/link';
import UserProfile from './userProfile';
declare global {
    interface Window {
        width: number;
        height: number;
    }
}
const NavBar = ({ navBarMenu }: any) => {

    const { products, resetSelectedProducts } = useProductStore()
    const { setCategoryClicked, categorySelected }: any = useCategoryStore()

    const [windowDimensions, setWindowDimensions] = useState<any>({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [clickedGender, setClickedGender] = useState(localStorage.getItem('Gender') || "MEN")

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [products, categorySelected]);

    return (
        <Container className='nav-container'>
            {windowDimensions.width > 790 ?
                (< WrapperNavBar className='wrapper-nav-bar'>


                    <WrapperLogo className='wrapper-logo'>
                        <Logo />
                    </WrapperLogo>

                    <MenuNavBar className='wrapper-nav-link'>
                        {navBarMenu && navBarMenu.map((menu: any, index: number) => {
                            return (
                                <WrapperLink key={index} className='wrapper-link'>
                                    <p className='link' style={{ color: clickedGender === menu.name ? 'var(--button-color)' : '#ffffff' }} onClick={() => { setClickedGender(menu.name); setCategoryClicked(menu.name); resetSelectedProducts() }}>{menu.name}</p>
                                </WrapperLink>
                            )
                        })}
                    </MenuNavBar>

                    <WrapperUserProfile>
                        <UserProfile />
                    </WrapperUserProfile>

                </WrapperNavBar>)
                :
                (<ResponsiveBrowser className='responsive-browser-nav-bar'>

                    <WrapperLogoUserProfile>
                        <WrapperLogoResponsive className='wrapper-logo'>
                            <Logo />
                        </WrapperLogoResponsive>


                        <WrapperUserProfileResponsive className='wrapper-user-profile'>
                            <UserProfile />
                        </WrapperUserProfileResponsive>
                    </WrapperLogoUserProfile>

                    <MenuNavBar className='wrapper-nav-link'>
                        {navBarMenu && navBarMenu.map((menu: any, index: number) => {
                            return (
                                <WrapperLink key={index} className='wrapper-link'>
                                    <Link className='link' href={menu.to}>{menu.name}</Link>
                                </WrapperLink>
                            )
                        })}
                    </MenuNavBar>

                </ResponsiveBrowser>)
            }
        </Container >
    )
}

export default NavBar;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background-color: var(--secondary-color);
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border-color);
    z-index: 100;

    .wrapper-link{
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 100%;
        /* background-color: green; */
    }

    .link{
        text-decoration: none;
        color: #ffffff;
        font-size: auto;
        font-weight: 500;
        cursor: pointer;
        padding: 0px 30px
    }

    @media (max-width: 400px) {
      .link{
        transition: all 0.2s ease-in-out;
        font-size: 5px;
  }

    .link{
      font-size: 10px;
    }


  }
`

const WrapperNavBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* background-color: green; */
`



const MenuNavBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40%;
    width: auto;
    height: 100%;
    padding: 10px;
    /* background-color: red; */
`

const WrapperLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:25%;
    height: 100%;
    padding: 10px;
    /* background-color: blue; */
`

const WrapperLink = styled.div`
    padding: '10px';
    /* background-color: yellow; */
`

const WrapperUserProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:25%;
    height: 100%;
    padding: 10px;
    /* background-color: blue; */
`


//  RESPONSIVE
const ResponsiveBrowser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* background-color: green; */
`

const WrapperLogoUserProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* background-color: green; */
`

const WrapperUserProfileResponsive = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    /* background-color: green; */
    `

const WrapperLogoResponsive = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    /* background-color: green; */
`