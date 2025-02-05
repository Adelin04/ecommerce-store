'use client'

import styled from 'styled-components'
import { useCategoryStore } from '../zustandStore/useCategoryStore';
import CategoriesList from '../component/products/categoriesList';
import { useMounted } from '../component/useMounted';
import Loading from '../loading';
import ProductsList from '../component/products/productList';
import { useProductStore } from '../zustandStore/useProductStore';

const HomePage = () => {
  const { categorySelected }: any = useCategoryStore();
  const { selectedProducts }: any = useProductStore();
  const { hasMounted } = useMounted()
  
  if (!hasMounted)
    return <Loading />
  return (
    <Container className='home-container'>
      <CategoriesList categories={categorySelected} />
    </Container>
  )
}

export default HomePage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`