'use client'

import './globals.css'
import { useProductStore } from "./zustandStore/useProductStore";
import React, { useEffect } from "react";
import styled from 'styled-components';
import { useCategoryStore } from './zustandStore/useCategoryStore';
import Loading from './loading';
import { useMounted } from './component/useMounted';
import { useUserStore } from './zustandStore/useUserStore';

const SetGlobalState = ({ children }: { children: React.ReactNode }) => {
    const { checkAuth } = useUserStore();
    const { getProducts } = useProductStore();
    const { getCategories } = useCategoryStore();
    const { hasMounted } = useMounted()


    useEffect(() => {
        checkAuth();
        getProducts();
        getCategories();

    }, [checkAuth])

    if (!hasMounted)
        return <Loading />
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
`