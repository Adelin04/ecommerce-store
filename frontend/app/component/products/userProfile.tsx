'use client'

import styled from 'styled-components';
import UserProfileImageLogin from '../../../assets/userLogin.png'
import UserProfileImageLogout from '../../../assets/userLogout.png'
import Link from 'next/link';
// import { useUserStore } from '../store/useUserStore';

const UserProfile = () => {
    // const {user} = useUserStore();
    const user = true;

    return (
        <Container className="container-user-profile">
            <Link className='link-user-profile' href={user ? "/profile" : "/authPage"}>
                {/* <Image className='img-user-profile' src={user ? UserProfileImageLogin : UserProfileImageLogout} alt="User Profile" /> */}
            </Link>
        </Container>
    )
}

export default UserProfile;


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .img-user-profile{
        width: 25px;
        height: auto;
        cursor: pointer;
    }

    @media (max-width: 400px) {
      .img-user-profile{
        transition: all 0.2s ease-in-out;
    }
  }
`