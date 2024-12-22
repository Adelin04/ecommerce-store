import React, { useState } from 'react'
import styled from 'styled-components'
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePassword } from "react-icons/md";
import { useUserStore } from '@/app/zustandStore/useUserStore';

const Login = () => {
    const { login } = useUserStore();
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(email, password as string);
        setEmail('');
        setPassword('')
    }

    return (
        <Container className='login-container'>

            <h3 className='login-title'>Login to your account</h3>

            <form onSubmit={(e) => { handleSubmit(e) }} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <WrapperLogin className='wrapper-login'>

                    <WrapperLabelInput>
                        <label className='email-label'>Email</label>
                        <input className='email-input' type='email' autoComplete='on' required name='email' id='email' placeholder='email@example.com' autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TfiEmail style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                    </WrapperLabelInput>

                    <WrapperLabelInput>
                        <label className='password-label'>Password</label>
                        <input className='password-input' type='password' autoComplete='on' required name='password' id='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <MdOutlinePassword style={{ position: 'absolute', left: '10px', top: '27px', color: 'grey' }} />
                    </WrapperLabelInput>

                </WrapperLogin>
                <button className='login-button' type='submit'>Login</button>
            </form>

        </Container>
    )
}

export default Login;

const Container = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 30%;
    min-width: 300px;
    padding: 20px;
    height: 100%;
    margin: auto;
    border-radius: 5px;
    background-color: var(--secondary-color);

    .login-button{
        width:  97%;
        height: 30px;
        outline: none;
        border: none;
        border-radius: 5px;
        margin: 15px 0px;
        background-color: var(--button-color);
        color: #ffffff;
        cursor: pointer;
    }

    .login-title{
        color: #ffffff;
        font-weight: bold;
        font-size: 13px;
        padding-bottom: 15px;
    }
`

const WrapperLogin = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width:100%;
    height: auto;
    margin: auto;
    border-radius: 5px;

    .email-label,
    .password-label {
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
        background-color: var(--input-color);
        color: #ffffff;
        text-align:center;
    }

    ::placeholder{
        color: grey;
        font-size: 10px;
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
`