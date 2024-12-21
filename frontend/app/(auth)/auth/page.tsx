'use client'

import React, { useState } from 'react'
import Login from '../../component/auth/Login'
import Register from '../../component/auth/Register'
import styled from 'styled-components'
import { useUserStore } from '@/app/zustandStore/useUserStore'
import { redirect } from 'next/navigation'

const AuthPage = () => {
    const { isAuth } = useUserStore();
    const [toggle, setToggle] = useState(true);

    if (isAuth)
        return redirect('/');
    else
        return (
            <Container className='auth-page-container'>

                {toggle ?

                    (<WrapperAuthPage className='wrapper-auth-page'>
                        <div className="register-account">
                            <span> Don't you have an account? </span>
                            <button className='click-to-login' onClick={() => setToggle(!toggle)}> Register</button>
                        </div>
                        <Login />
                    </WrapperAuthPage>)
                    :
                    (<WrapperAuthPage>
                        <div className="register-account">
                            <span> Do you have an account? </span>
                            <button className='click-to-register' onClick={() => setToggle(!toggle)}> Login</button>
                        </div>
                        <Register />
                    </WrapperAuthPage>)


                }

            </Container>
        )
}

export default AuthPage

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

`

const WrapperAuthPage = styled.div`
    position: relative;
    margin: 20px;

    .register-account {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        padding: 5px;
        width: 100%;
    }

    span {
        font-size: 10px;
        color: white;
        padding-right: 5px;
    }

    .click-to-login,
    .click-to-register {
        background: transparent;
        outline: none;
        border: none;
        font-size: 13px;
        font-weight: bold;
        text-decoration: none;
        color: var(--button-color);
        cursor: pointer;
    }
`