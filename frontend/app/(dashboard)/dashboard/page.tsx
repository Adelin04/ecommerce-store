'use client'

import Button from "@/app/component/ui/Button";
import { useMounted } from "@/app/component/useMounted";
import PopUpProfile from "@/app/component/userSettings/profileSettings";
import Loading from "@/app/loading";
import { useUserStore } from "@/app/zustandStore/useUserStore";
import React, { useState } from "react";
import styled from "styled-components";
import CreateNewProduct from "./component/product/createNewProduct";
import CreateNewColor from "./component/product/createNewColor";
import { useProductStore } from "@/app/zustandStore/useProductStore";
import ProductsListAdmin from "./component/product/productListAdmin";

export default function Dashboard() {
  const { hasMounted } = useMounted()
  const { products } = useProductStore()
  const { user, isAuth, logout } = useUserStore();
  const [btnClicked, setBtnClicked] = useState<any>(null);
  const [menus, setMenus] = useState(
    {
      menuAdmin: [
        'Create New Product', 'Create New Color', 'Create New Brand', 'Create New Category', 'Create New Gender', 'Create New Size', 'Create New Currency'
      ]
    }
  );

  const Menu: any = {
    CreateNewProduct: () => <CreateNewProduct close={handleClosePopUp} user={user} />,
    CreateNewColor: () => <CreateNewColor close={handleClosePopUp} user={user} />,
    // CreateNewBrand: () => <CreateNewBrand close={handleClosePopUp} user={user} />,
    // CreateNewCategory: () => <CreateNewCategory close={handleClosePopUp} user={user} />,
    // CreateNewGender: () => <CreateNewGender close={handleClosePopUp} user={user} />,
    // CreateNewSize: () => <CreateNewSize close={handleClosePopUp} user={user} />,
    // CreateNewCurrency: () => <CreateNewCurrency close={handleClosePopUp} user={user} />
  };

  const handleClosePopUp = () => setBtnClicked(null);

  const createElementCustom = () => {
    if (Menu[`${btnClicked.split(" ").join("").trim()}`] === undefined) return null
    return React.createElement(
      Menu[`${btnClicked.split(" ").join("").trim()}`] as any)
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
                      <Button key={index} id={menu} style={{ color: btnClicked === menu.split(" ").join("").trim() ? 'salmon' : '#ffffff' }} onClick={(e: any) => { onOpenMenu(e.target.id) }}>{menu}</Button>
                    )
                  })
                }
              </div>
            </AdminPanel>
          }
        </WrapperSlider>
      </Slider>

      <div className='spacer'></div>
      
      <Content>
        {/*         <TableHead>
          <p className='name'>Name</p>
          <p className='color'>Color</p>
          <p className='size'>Size</p>
          <p className='price'>Price</p>
          <p className='currency'>Currency</p>
          <p className='brand'>Brand</p>
          <p className='seller'>Seller</p>
          <p className='gender'>Gender</p>
          <p className='category'>Category</p>

        </TableHead> */}
        <ProductsListAdmin products={products} />
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

    .spacer{
        display: flex;
        min-width: 250px;
    }
`
const Slider = styled.div`
    position: fixed;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* background-color: salmon; */
    /* border: 5px solid black; */
`

/* const TableHead = styled.div`
    position:fixed;
    top: 0px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 50px;
    padding: 5px 15px;
    margin: 5px auto;
    border-bottom: 1px solid #c7c7c7ba;
    border-top: 1px solid #c7c7c7ba;
    border-radius: 10px;
` */