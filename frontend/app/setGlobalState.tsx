'use client'

import './globals.css'
import { useProductStore } from "./zustandStore/useProductStore";
import React, { useEffect } from "react";
import styled from 'styled-components';
import { useCategoryStore } from './zustandStore/useCategoryStore';

const SetGlobalState = ({ children }: { children: React.ReactNode }) => {
    const { getProducts } = useProductStore();
    const { getCategories } = useCategoryStore();

    useEffect(() => {
        getProducts();
        getCategories();
    }, [])

    return (
        <Container>
            {children}
        </Container>
    )
}

export default SetGlobalState;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
height: auto;
min-height: 100vh;
padding-top: 100px;
/* padding-bottom: 150px; */
`