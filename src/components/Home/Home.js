import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Products from '../Products/Products';
import './Home.css'
const Home = () => {
    const [shopping, setShopping] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/shoppingItems')
        .then(res => res.json())
        .then(data => setShopping(data))
    },[])
    return (
        <Container>
            <div class="text-center search-field mt-5 mb-5 d-flex">
                <input type="text" className="form-control" placeholder="Search for SmartPhone" />
                <button class="btn btn-success">Search</button>
            </div>
            <Row>
                {
                    shopping.map(product => <Products key={product._id} product={product}></Products>)
                }
            </Row>
        </Container>
    );
};

export default Home;