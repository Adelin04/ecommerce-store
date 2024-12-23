
'use client'

import PopUpSecurity from '@/app/component/user/popUpSecurity';
import PopUpProfile from '../../../component/user/popUpProfile'
import { useMounted } from "@/app/component/useMounted";
import Loading from "@/app/loading";
import React, { useState } from 'react';
import styled from "styled-components";
import Notifications from '@/app/component/user/popUpNotifications';

export default function Settings() {
  const { hasMounted } = useMounted()
  const [btnClicked, setBtnClicked] = useState<any>('Profile');

  const Menu: any = {
    Profile: () => <PopUpProfile close={handleClosePopUp} />,
    Security: () => <PopUpSecurity close={handleClosePopUp} />,
    Notifications: () => <Notifications close={handleClosePopUp} />,
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

  if (!hasMounted)
    return <Loading />
  return (
    <Container className='containe'>

      <Slider className='slider'>
        <WrapperSlider className='wrapper-slider'>
          <WrapperButtons className='wrapper-buttons'>
            <button className="button" id='Profile' style={{ color: btnClicked === 'Profile' ? 'salmon' : '#ffffff' }} onClick={(e: any) => { onOpenMenu(e.target.id) }}>Profile</button>
            <button className="button" id='Security' style={{ color: btnClicked === 'Security' ? 'salmon' : '#ffffff' }} onClick={(e: any) => { onOpenMenu(e.target.id) }}>Security</button>
            <button className="button" id='Notifications' style={{ color: btnClicked === 'Notifications' ? 'salmon' : '#ffffff' }} onClick={(e: any) => { onOpenMenu(e.target.id) }}>Notifications</button>
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
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 15px 0px;
    
    button{
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

    button:hover{
      cursor: pointer;
      border: 1px solid var(--button-border-hover);
    }
    
    button:active{
      background-color: var(--button-backgound-hover);
      color: var(--button-color-active);
    }
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