import Link from "next/link"
import styled from "styled-components"

interface PropsHeaderMenu {
    children: React.ReactNode
    label: string | null
    linkText: string | null
}

export default function HeaderMenu({ children, label, linkText }: PropsHeaderMenu) {
    return (
        <Header className="header">
            <label>{label}</label>
            <Link className='close' href={'/'}> {linkText} </Link>
            {children}
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    align-items: start;
    width: 100%;
    padding: 5px 15px;
    border-bottom: 1px solid #c7c7c7ba;
    
    label{
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        /* color: #ffffff;         */
    }
    
    p{
        font-size: 10px;
        font-weight: bold;
        /* color: #ffffff; */
    }
    `