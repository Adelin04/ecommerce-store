
'use client'

import { useMounted } from "@/app/component/useMounted";
import Loading from "@/app/loading";
import Link from "next/link";
import styled from "styled-components";

export default function Settings() {
  const { hasMounted } = useMounted()


  if (!hasMounted)
    return <Loading />
  return (
    <Container>
      <PopUp>
        <LeftContent>
          <ContainerLeftSide className={'containerLeftSide '}>
            <WrapperTitleLeftSide>
              <label>Account</label>
              <p>Manage your account info</p>
            </WrapperTitleLeftSide>
            
            <ButtonLeftSide>
              <button>Profile</button>
              <button>Security</button>
              <button>Notifications</button>
            </ButtonLeftSide>

          </ContainerLeftSide>

          <ContainerCopyRight className={'containerCopyRight '}>
            <div> <p className="copyRight"> Made In Romania by <Link className="name-owner" href={'https://adelin-marin-portfolio.netlify.app/'} target='_blank'> <span className="name-owner">Adelin Marin</span></Link> © {new Date().getFullYear()} </p></div>
          </ContainerCopyRight>
        </LeftContent>
        <RightContent>
          Settings
        </RightContent>
      </PopUp>
    </Container>
  );
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    `

const PopUp = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 400px;
    height: 400px;
    background-color: white;
`

const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 100%;
    background-color: green;
`

const ContainerLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    height: 50%;
    background-color: red;
`

const WrapperTitleLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 50%;

    label{
        font-size: 20px;
        color: #ffffff;        
    }

    p{
        font-size: 10px;
        color: #ffffff;
    }
`

const ButtonLeftSide = styled.button`
    min-width: 90px;
    font-size: 13px;    
    width:  auto;
    min-height: 25px;    
    height: auto;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 15px 0px;
    background-color: var(--button-color);
    color: #ffffff;
    cursor: pointer;
`


const RightContent = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    width: 60%;
    height: 100%;
    background-color: blue;
`
const ContainerCopyRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    height: 50%;

    p{
        color: #ffffff;
        font-size: 13px;
        text-align: center;
    }

    span{
        text-decoration: underline;
        color: var(--button-color);
    }
`