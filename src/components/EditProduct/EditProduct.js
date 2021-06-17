import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../SideBar/Sidebar';

const EditProduct = () => {
    return (
        <Container>
            <Row>
                <Col md={3} xs={4}>
                    <Sidebar />
                </Col>
                <Col md={9} xs={8}>
                    <h1>This is Edit Product</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default EditProduct;