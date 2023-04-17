import Card from 'react-bootstrap/Card';
import './ProductsList.scss';

const ProductsList = ({ products }) => {
  const ListItems = products.map(e => (
    <Card className="products-list-wrapper__product">
      <Card.Body>
        <Card.Title>{e.translated.name}</Card.Title>
        <Card.Text>{e.translated.description}</Card.Text>
        <Card.Title>Price: {e.calculatedPrice.totalPrice}</Card.Title>
      </Card.Body>
    </Card>
  ));

  return <div className="products-list-wrapper">{ListItems}</div>;
};

export default ProductsList;
