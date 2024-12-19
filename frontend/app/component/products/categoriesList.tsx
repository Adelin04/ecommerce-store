'use client'

import styled from 'styled-components';
import CategoryCard from './categoryCard';

const CategoriesList = ({ categories }: any) => {


    return (
        <Container className='container-products-list'>
            <WrapperProductList className='wrapper-products-list'>
                {categories && categories.map((category: any, index: number) =>
                    <CategoryCard category={category} image={category.image} key={index} />
                )}
            </WrapperProductList>
        </Container>
    )
}

export default CategoriesList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    /* height: 100%; */
    margin: auto;
`

const WrapperProductList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin: auto;
`