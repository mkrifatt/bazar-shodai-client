import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import SingleOrder from '../SingleOrder/SingleOrder';
import spinner from '../Home/img/loading.gif'
const OrderedItems = () => {
    
    const [orderedItem , setOrderedItem] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    useEffect(()=>{
        fetch('https://aqueous-headland-21885.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrderedItem(data))
    },[loggedInUser.email])

    return (
        <Container className="mt-5">
            <Row>
                {
                    orderedItem.length > 0 ? orderedItem.map(order => <SingleOrder order={order}/> )
                    :<img style={{width:'30%'}} className="text-center m-auto" src={spinner} alt="..."/>                
                }    
            </Row>
        </Container>
    );
};

export default OrderedItems;