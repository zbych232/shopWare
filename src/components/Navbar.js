import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { ShopwareListContext } from '../contexts/ShopwareListContext';

function MainNavbar() {
  const { setSortOrderValue } = useContext(ShopwareListContext);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Shopware Listing</Navbar.Brand>
        <Form className="d-flex">
          <Form.Select
            aria-label="Default select example"
            onChange={e => {
              setSortOrderValue(e.target.value);
            }}
          >
            <option value="price-asc">Lowest price</option>
            <option value="price-desc">Highest price</option>
          </Form.Select>
        </Form>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
