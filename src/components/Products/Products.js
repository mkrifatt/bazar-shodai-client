import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Products = ({product}) => {
    const {image, name, weight, price, _id} = product;
    const history = useHistory();
    const handleOrder = () => {
        history.push(`/shopping/${_id}`);
    }
    console.log(_id)
    return (
        <Col lg={3} md={6}>
          <Card className="mt-4">
                <Card.Img variant="top" className="img" src={image} />
                <Card.Body className=" text-center">
                    <Card.Title>{name}</Card.Title>
                   < Card.Text>Weight : {weight}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between footer">
                    <h5>৳{price}</h5>
                    <Button variant="success" onClick={() => handleOrder()}> Buy Now</Button> 
                </Card.Footer>
             </Card>
        </Col>
    );
};

export default Products;