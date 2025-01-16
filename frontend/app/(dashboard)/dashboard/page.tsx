'use client'

import Button from "@/app/component/ui/Button";
import { useMounted } from "@/app/component/useMounted";
import PopUpProfile from "@/app/component/userSettings/profileSettings";
import Loading from "@/app/loading";
import { useUserStore } from "@/app/zustandStore/useUserStore";
import React, { useState } from "react";
import styled from "styled-components";
import CreateNewProduct from "./component/product/createNewProduct";

export default function Dashboard() {
  const { hasMounted } = useMounted()
  const { user, isAuth, logout } = useUserStore();
  const [btnClicked, setBtnClicked] = useState<any>('CreateNewProduct');
  const [menus, setMenus] = useState(
    {
      menuAdmin: [
        'CreateNewProduct', 'DeleteProduct', 'UpdateProduct'
      ]
    }
  );

  const Menu: any = {
    CreateNewProduct: () => <CreateNewProduct close={handleClosePopUp} user={user} />,
    UpdateProduct: () => <CreateNewProduct close={handleClosePopUp} user={user} />,
    DeleteProduct: () => <CreateNewProduct close={handleClosePopUp} user={user} />,
  };

  const handleClosePopUp = () => setBtnClicked(null);

  const createElementCustom = () => {
    return React.createElement(
      Menu[`${btnClicked}`] as any)
  }

  const onOpenMenu = (buttonClicked: string) => {
    setBtnClicked(buttonClicked)
  }

  if (!hasMounted)
    return <Loading />
  return (
    <Container className='container'>
      <Slider className='slider'>
        <WrapperSlider className='wrapper-slider'>
          {
            user?.role === 'admin' &&
            <AdminPanel>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <div className='admin-panel-label'><label>Admin Panel</label></div>
                {
                  menus.menuAdmin.map((menu: any, index: number) => {
                    return (
                      <Button key={index} id={menu} style={{ color: btnClicked === menu ? 'salmon' : '#ffffff' }} onClick={(e: any) => { onOpenMenu(e.target.id) }}>{menu}</Button>
                    )
                  })
                }
              </div>
            </AdminPanel>
          }
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

const AdminPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 15px 0px;

    .admin-panel-label{
      margin: 0px 0px 10px 0px;
    }
    

    label{
      padding: 5px 0px;
      font-size: 17px;
      font-weight: bold;
      color: #ffffff;
    }

    button{

      width:  60%;
      height: 35px;
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