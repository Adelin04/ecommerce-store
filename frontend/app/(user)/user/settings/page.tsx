
'use client'

import PopUp from '../../../component/user/popUp'
import { useMounted } from "@/app/component/useMounted";
import Loading from "@/app/loading";
import styled from "styled-components";

export default function Settings() {
  const { hasMounted } = useMounted()



  if (!hasMounted)
    return <Loading />
  return (
    <Container className='containe'>

      <Slider className='slider'>
        <WrapperSlider className='wrapper-slider'>
          <ButtonsLeftSide className='buttons-left-side'>
            <button className="button">Profile</button>
            <button className="button">Security</button>
            <button className="button">Notifications</button>
          </ButtonsLeftSide>
        </WrapperSlider>
      </Slider>

      <Content>
        <PopUp />
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
    /* background-color: red; */
`

const Slider = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    /* width: 20%; */
    min-width: 250px;
    /* max-width: 250px; */
    /* width:150px; */
    height: 100%;
    /* background-color: red; */
    `



const WrapperSlider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
    max-width: 250px;
    height: 100%;
    border-right: 1px solid grey;
    /* background-color: red; */
`

const ButtonsLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 15px 0px;
    
    .button{
      padding: 5px 0px;
      min-width: 90px;
      font-size: 13px;    
      width:  auto;
      min-height: 25px; 
      height: auto;
      outline: none;
      border: none;
      border-radius: 5px;
      margin: 5px 0px;
      background-color: var(--button-color);

    }

    button:hover{
      cursor: pointer;
        color: #ffffff;
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