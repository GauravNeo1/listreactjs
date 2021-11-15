import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

export default function Product() {
    const [state,setState]=useState({ proData:[]});
    useEffect(()=>{
        axios.get("http://localhost:3001/product")
        .then (res=>{setState({proData :res.data})}) 
    },[])

    console.log(state.proData);


    return (
        <div>
            <Container>
                <Row>
                    {
                        state.proData.map((item, index) => {
                            return (
                                <Col key={index} className="mb-3">
                                    <Card style={{width:'14rem', marginTop:'20px'}}>
                                        <Card.Img variant="top" src={item.images} height="200px" width="170px" />
                                        <Card.Body>
                                            <Card.Title>{item.pname}</Card.Title>
                                            <Card.Title style={{fontSize:"small"}}>{item.detail}</Card.Title>
                                            <Card.Title style={{color:"red",fontSize:"large",fontWeight:"bold"}}>${item.price}</Card.Title>
                                            <Button variant="primary">Add to cart</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>


       
        </div>
    )
}
