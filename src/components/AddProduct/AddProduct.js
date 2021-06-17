import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../SideBar/Sidebar';
import './AddProduct.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    
    const onSubmit = data =>{
        console.log('image respnse',imageUrl);
        const shoppingData = {
            name:data.name,
            weight:data.weight,
            price:data.price,
            image: imageUrl
        }
    console.log(shoppingData);

    const url = `https://aqueous-headland-21885.herokuapp.com/addShopping`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(shoppingData)
    })
    .then(res => console.log('Server side responed', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '95da78ea4422a5a8bd09803f7dd9f267');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <Container>
            <Row>
                <Col md={3} xs={4}>
                    <Sidebar />
                </Col>
                <Col md={9} xs={8}>
                    <form onSubmit={handleSubmit(onSubmit)} className="submit-area p-5">
                        <div className="input d-flex justify-content-between">
                            <input name="name" placeholder="Product Name" className="form-control" {...register("name")} />
                            <input name="weight" placeholder="Product weight" type="number" className="form-control" {...register("weight")} />
                        </div>

                        <div className="input d-flex mt-4">
                            <input name="price" placeholder="Product Price" type="number" className="form-control" {...register("price")} />
                            <input name="image" type='file' className="form-control" onChange={handleImageUpload} />
                        </div>
                        <input type="submit" value="save" className="submit float-right" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddProduct;