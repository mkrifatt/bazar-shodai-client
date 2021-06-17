import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const OrderCheckOut = () => {
    const {id} = useParams();
    const [orderCheckout, setOrderCheckout] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {name, price} =orderCheckout;

    useEffect(()=>{
        const url= `http://localhost:5000/shopping/${id}`
     //   console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setOrderCheckout(data))
    },[id]);

    const handleOrderCheckout = () => {
        const date =( new Date().toDateString('dd/mm/yyyy'))
        console.log(date);
        const newOrder = {...loggedInUser,...orderCheckout, date}
        delete newOrder._id
        console.log(newOrder);
        fetch('http://localhost:5000/orderCheckout', {
            method : 'POST',
            headers:{ 
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
        window.alert("We Received Your Order Successfully")
    }
    return (
        <Container className="mt-5">
            <div className="order-checkout">
            <h3 className="mb-4">Order Checkout</h3>
            <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th>Mobile Name</th>
                    <th>Quantity</th>
                    <th>Prize</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td> 1 </td>
                    <td>{price}</td>
                </tr>
            </tbody>
            </Table>
            <Button  variant="success"  className="mt-5 float-right" onClick ={handleOrderCheckout}>Checkout</Button>
            </div>
        </Container>
    );
};

export default OrderCheckOut;