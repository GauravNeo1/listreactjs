import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';





export default function Course(props) {
    const [state,setState]=useState({ proData:[]});
    useEffect(()=>{
        axios.get("http://localhost:3001/course")
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
                                <Col key={index} className="mb-4">
                                    <Card style={{width:'15rem', marginTop:'20px'}}>
                                        <Card.Img variant="top" src={item.images} height="150px" width="220px" />
                                        <Card.Body>
                                            <Card.Title>{item.cname}</Card.Title>
                                            <Card.Title style={{fontSize:"small", textAlign:"left"}}>{item.tutor}</Card.Title>
                                            <Card.Title style={{fontSize:"medium", textAlign:"left"}}>
                                                 Rating: {item.rating}</Card.Title>
                                            <Card.Title style={{color:"red",fontSize:"large",fontWeight:"bold", textAlign:"left"}}>${item.price}</Card.Title>
                                            <Button variant="primary" ><NavLink to={`/course/enquire/${item.id}`}><span style={{color:"white"}}>Enquire</span></NavLink></Button>
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
