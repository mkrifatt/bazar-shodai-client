import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Sidebar from '../SideBar/Sidebar';
import ManageProductTable from '../ManageProductTable/ManageProductTable';
import spinner from '../Home/img/Group 33149.png'
const ManageProduct = () => {
    const [product, setProduct] = useState([])
  
    useEffect(()=>{
        fetch(`https://aqueous-headland-21885.herokuapp.com/shoppingItems`)
        .then (res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <Container>
            <Row>
                <Col md={3} xs={4}>
                    <Sidebar />
                </Col>
                <Col md={9} xs={8}>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Weight</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            product.length > 0 ? product.map(product => <ManageProductTable product={product} />)
                                : <img style={{ width: '200px' }} className="text-center" src={spinner} alt="..." />
                        }
                    </Table>
                </Col>

            </Row>
        </Container>
    );
};

export default ManageProduct; <h1>This is manage product.</h1>