import Button from "@/app/component/ui/Button"
import Link from "next/link"
import styled from "styled-components"

interface PropsHeaderMenu {
    children: React.ReactNode
    label: string | null
    onclick: () => Function | void | null
}

export default function HeaderMenu({ children, label, onclick }: PropsHeaderMenu) {
    return (
        <Header className="header">
            <div className="wrapper-label-close">
                <label>{label}</label>
                <p className='close' onClick={onclick} > X </p>
            </div>

            <div className="wrapper-children">
                {children}
            </div>
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    min-height: 70px;
    padding: 5px 15px;
    border-bottom: 1px solid #c7c7c7ba;
    
    .wrapper-label-close{
        display: flex;
        /* flex-direction: column; */
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px;

    .close:hover{
      cursor: pointer;
      border: 1px solid var(--button-border-hover);
    }
    
    .close:active{
      background-color: var(--button-background-hover);
      color: var(--button-color-active);
    }  
}
    
    .wrapper-children{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    
    label{
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        /* color: #ffffff;         */
    }

    .wrapper-close{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    p{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        font-size: 13px;
        font-weight: bolder;
        color: salmon;
        background-color: var(--button-color);
        border-radius: 50px;
    }
    `