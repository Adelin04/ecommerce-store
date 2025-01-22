'use client'

import React, { useState } from 'react'
import Login from '../../component/auth/Login'
import Register from '../../component/auth/Register'
import styled from 'styled-components'
import { useUserStore } from '@/app/zustandStore/useUserStore'
import { redirect } from 'next/navigation'
import Button from '@/app/component/ui/Button'

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
                            <Button className='register-button' onClick={() => setToggle(!toggle)}> Register </Button>
                        </div>
                        <Login />
                    </WrapperAuthPage>)
                    :
                    (<WrapperAuthPage>
                        <div className="register-account">
                            <span> Do you have an account? </span>
                            <Button className='login-button' onClick={() => setToggle(!toggle)}> Login </Button>
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
        width: 100%;
        height: 25px;
        margin: 10px auto;
        
        span {
            font-size: 11px;
            font-weight: bold;
            color: white;
            padding-right: 10px;
            margin: 5px;
        }
    }

   .login-button,
   .register-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width:  auto;
        height: 17px;
        padding: 10px;
        font-size: 12px;
        cursor: pointer;
    }
`