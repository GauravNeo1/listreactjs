import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
import { Routes, Link, Route, useParams } from "react-router-dom"

import { Card, Container,Form,Button,Row,Col,Dropdown,DropdownButton, Alert} from 'react-bootstrap'

function Enquire(props) {

    const regForName=RegExp(/^([A-Za-z]{3,15})$/);
    const regForEmail=RegExp(/^([a-zA-Z0-9\.-])+@([a-zA-Z0-9-]+).([a-z]{2,25})$/);
    const regForContact=RegExp(/^[6-9]\d{9}$/);

    const params = useParams()
   
    const [course,setCourses]=useState([]);
    const [Name,setName]=useState("");
    const[nameError, setNameError]=useState("");

    const [Email,setEmail]=useState("");
    const[emailError, setEmailError]=useState("");

    const [Contact,setContact]=useState("");
    const[contactError, setContactError]=useState("");

    const [Query,setQuery]=useState("");
    
    const [state,setState]=useState({ proData:[]});
    useEffect(()=>{
        axios.get("http://localhost:3001/course/" + params.id )
        .then (res=>{setState({proData :res.data})}) 
    },[])


    const handler = (event) =>{
        const{name,value}=event.target;
        switch(name){
            case 'fname':
                setNameError('');
                setName(value);
                break;
            case 'email':
                    setEmailError('');
                    setEmail(value);
                    break;    
          
            case 'contact':
                setContactError('');
                setContact(value);
                break;

            case 'query':
                    setQuery(value);
                    break;

        }
    }

   
    const handleFormSubmit =(e)=>{
        e.preventDefault();

        if(Name=="" || Email=="" || Contact==""  ){
            alert("Please fill all the feild")
        }
       
        else if(!regForName.test(Name)){
            setNameError("First_name should be more than 2 character");
        }
        else if(!regForEmail.test(Email)){
            setEmailError("Enter valid Email ID");
        }
        else if(!regForContact.test(Contact)){
            setContactError("Mobile number must be 10 digit and start from 6-9");
        }
      
        else {
          
              let formData = { 
                fname: Name, 
                email:Email, 
                contact: Contact,
                course:state.proData.cname,
                query: Query
                
            }
            console.log(formData)
            
            axios.post(`http://localhost:3001/users`, formData);
            alert("Your response submitted");
            window.location.href="./Course";
           
            setEmail("");
            setContact("");
            setName("");
            setQuery("");
        }
}

   
    
    return (
        <div> 
     
        <div  style={{marginTop:"30px", marginLeft:"25%", marginBottom:"30px", textAlign:"center", backgroundColor:"whitesmoke", width:"50%"}}>
        <div style={{paddingTop:"20px" , paddingBottom:"20px",paddingLeft:"30px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>

            <h4>Mention your query here</h4>
            <br />
            <Form onSubmit={handleFormSubmit} style={{width:"600px"}}>
            

                <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" name="fname"
                        onChange={handler} value={Name}/>
                        {nameError && <div style={{color:"red"}}>{nameError}</div>}<br></br>
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter active email ID" name="email"
                        onChange={handler} value={Email}/>
                        {emailError && <div className="error-msg" style={{color:"red"}}>{emailError}</div>}<br></br>
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>contact</Form.Label>
                        <Form.Control type="text" placeholder="Enter Contact Number" name="contact"
                        onChange={handler} value={Contact}/>
                        {contactError && <div className="error-msg" style={{color:"red"}}>{contactError}</div>}<br></br>
                </Form.Group>



                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Query</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter Your query" rows={3} onChange={handler} name="query" value={Query} />
                </Form.Group>

                <br />
                                
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
        </div>

         </div>
    )
}

export default Enquire
