import React from 'react'
import {  useRef, useState, useEffect } from "react";
import axios from 'axios';

import { Card, Container, Row, Col, Button, Form, Table} from 'react-bootstrap';

export default function UserEnquiry() {
    const [state,setState]=useState({ proData:[]});
    useEffect(()=>{
        axios.get("http://localhost:3001/users")
        .then (res=>{setState({proData :res.data})}) 
    },[])

    return (
        <div style={{marginTop:"40px"}}>
            <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Contact No.</th>
                    <th>Course_Name</th>
                    <th>Query</th>
                    </tr>
                </thead>
                <tbody>
                {
                        state.proData.map((item, index) => {
                            return (
                                <tr  key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.fname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.course}</td>
                                    <td>{item.query}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
                </Table>
                </Container>
        </div>
    )
}
