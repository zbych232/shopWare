import React, { useContext } from 'react';
import { ShopwareListContext } from '../contexts/ShopwareListContext';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import ProductsList from '../components/ProductsList';
import { getSearchProducts, getProducts } from '../clients/productsClient';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import { useQuery } from '@tanstack/react-query';

function Home() {
  const { queryBody } = useContext(ShopwareListContext);

  const { data, error, isLoading } = useQuery({
    queryKey: ['products', queryBody],
    queryFn: queryBody.search
      ? () => getSearchProducts(queryBody)
      : () => getProducts(queryBody),
  });

  return (
    <>
      <Navbar />
      <Container>
        <Search />
        {isLoading ? (
          <Spinner animation="border" variant="dark" />
        ) : (
          <ProductsList products={data?.data?.elements} />
        )}
        {error && <div>Could not fetch the data. Error occurred!</div>}
        {data?.data?.elements.length < 1 && <div>No results found</div>}
      </Container>
    </>
  );
}

export default Home;
