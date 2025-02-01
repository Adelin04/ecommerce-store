'use client'

import styled from 'styled-components';
import UserProfileImageLogin from '../../assets/userLogin.png'
import Link from 'next/link';
import Image from 'next/image';
import { IUser } from '../interfaces/interfaces';

const UserProfile = ({user}: {user: IUser | null}) => {
    
    return (
        <Container className="container-user-profile">
            <Link className='link-user-profile' href={user ? "/user/settings" : "/auth"}>
                <Image className='img-user-profile' priority src={ user ? user.imageProfile : UserProfileImageLogin} alt="User Profile" width={50} height={50} />
            </Link>
        </Container>
    )
}

export default UserProfile;


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    .img-user-profile {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        cursor: pointer;
        border-radius: 50%;
    }

    @media (max-width: 400px) {
      .img-user-profile{
        transition: all 0.2s ease-in-out;
    }
  }
`