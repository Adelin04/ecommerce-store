import React, { useState } from 'react'
import styled from 'styled-components'
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePassword } from "react-icons/md";
import { useUserStore } from '@/app/zustandStore/useUserStore';
import Button from '../ui/Button';
import { useExistEmptyFields } from '@/app/utils/useExistEmptyFields';
import { login } from '@/app/actions/userActions';

const Login = () => {
    const { setLogin } = useUserStore();
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const cleanMessage = () => {
        setTimeout(() => setMessage(''), 3000)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (useExistEmptyFields([email, password])) { setMessage('Please fill all the fields'); cleanMessage(); return }
        const userLogged = await login(email, password as string);

        // setEmail('');
        // setPassword('')
        setLogin(userLogged);
    }

    return (
        <Container className='login-container'>
            <div className='login-message'>{message}</div>
            <h3 className='login-title'>Login to your account</h3>

            <form style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onSubmit={(e) => { handleSubmit(e) }}>
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

                    <Button className='component-login-button' type='submit'>Login</Button>
                </WrapperLogin>
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
    min-width: 350px;
    padding: 20px;
    min-height: 300px;
    margin: auto;
    border-radius: 5px;
    background-color: var(--secondary-color);

    .login-message{
        display:inherit;
        justify-content: center;
        align-items : center;
        text-align: center;
        width: auto;
        height: 30px;
        color: salmon;
        font-size: 17px;
        font-weight: bold;
    }


    .component-login-button{
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
        font-size: 15px;
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
        display:inherit;
        width: 100%;
        height: 30px;
        outline: none;
        border: none;
        border-radius: 5px;
        margin: 0px;
        background-color: #ffffff;
        color: #000000;
        text-align:center;
    }

    ::placeholder{
        display:inherit;
        color: grey;
        font-size: 13px;
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