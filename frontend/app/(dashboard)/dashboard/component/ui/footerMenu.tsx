import Link from "next/link"
import styled from "styled-components"

interface PropsFooterMenu {
    children: React.ReactNode
}

export default function FooterMenu({ children }: PropsFooterMenu) {
    return (
        <Footer className="footer-menu">
                {children}
        </Footer>
    )
}

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 5px 15px;
    margin: 5px auto;
    border-top: 1px solid #c7c7c7ba;
`
