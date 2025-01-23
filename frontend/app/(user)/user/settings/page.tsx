
'use client'

import SecuritySettings from '@/app/component/userSettings/securitySettings';
import ProfileSettings from '../../../component/userSettings/profileSettings'
import { useMounted } from "@/app/component/useMounted";
import Loading from "@/app/loading";
import React, { useState } from 'react';
import styled from "styled-components";
import { useUserStore } from '@/app/zustandStore/useUserStore';
import Button from '@/app/component/ui/Button';
import { redirect } from 'next/navigation'
import Link from 'next/link';
import NotificationsSettings from '@/app/component/userSettings/notificationsSettings';

export default function Settings() {
  const { hasMounted } = useMounted()
  const { user, isAuth, logout } = useUserStore();
  const [btnClicked, setBtnClicked] = useState<any>('Profile');
  const [menus, setMenus] = useState(
    {
      menuUser: [
        'Profile', 'Security', 'Notifications'
      ],
    }
  );

  const Menu: any = {
    Profile: () => <ProfileSettings close={handleClosePopUp} user={user} />,
    Security: () => <SecuritySettings close={handleClosePopUp} user={null} />,
    Notifications: () => <NotificationsSettings close={handleClosePopUp} user={null} />,
  };

  const handleClosePopUp = () => setBtnClicked(null);

  const createElementCustom = () => {
    return React.createElement(
      Menu[`${btnClicked}`] as any)
  }

  const onOpenMenu = (buttonClicked: string) => {
    // cleanProductClickedToEdit()

    setBtnClicked(buttonClicked)
  }

  if (!isAuth) return redirect('/');
  if (!hasMounted)
    return <Loading />
  return (
    <Container className='container'>

      <Slider className='slider'>
        <WrapperSlider className='wrapper-slider'>
          <WrapperButtons className='wrapper-buttons'>

            <UserPanel>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                  {
                    menus.menuUser.map((menu: any, index: number) => {
                      return (
                        <Button key={index} id={menu} style={{ color: btnClicked === menu ? 'salmon' : '#ffffff' }} onClick={(e: any) => { onOpenMenu(e.target.id) }}>{menu}</Button>
                      )
                    })
                  }
                </div>
              </div>
            </UserPanel>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              {user?.role === 'admin' && <Link className='link-dashboard' href={'/dashboard'} style={{ color: 'salmon' }} >Dashboard</Link>}
              <Button id='Notifications' style={{ color: 'salmon' }} onClick={() => { logout() }}>Logout</Button>
            </div>

          </WrapperButtons>
        </WrapperSlider>
      </Slider>

      <Content>
        {btnClicked && createElementCustom()}
      </Content>
    </Container >
  );
}


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
`

const Slider = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    min-width: 250px;
    height: 100%;
`

const WrapperSlider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
    max-width: 250px;
    height: 100%;
    border-right: 1px solid salmon;
    /* background-color: red; */
`

const WrapperButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 15px 0px;
    
    .link-dashboard,
    button{
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 5px 0px;
      min-width: 90px;
      font-size: 13px;    
      width:  60%;
      height: 35px;
      /* height: auto; */
      outline: none;
      border: none;
      border-radius: 5px;
      margin: 5px 0px;
      color: #ffffff;
      font-weight: bold;
      padding: 5px 0px;
      background-color: var(--button-color);
    }

`

// const AdminPanel = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     height: 100%;
//     margin: 15px 0px;

//     .admin-panel-label{
//       margin: 0px 0px 10px 0px;
//     }


//     label{
//       padding: 5px 0px;
//       font-size: 17px;
//       font-weight: bold;
//       color: #ffffff;
//     }
// `

const UserPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 15px 0px;
`


const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* background-color: salmon; */
    /* border: 5px solid black; */
`