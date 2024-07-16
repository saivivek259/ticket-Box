import React, { useState } from "react";
import  Container   from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import loginPageImg from '../assets/login.png'
import { useNavigate } from "react-router-dom";


export default function Signup(){
  const [email, setEmail] = useState('');

   const navigate = useNavigate()

  const handleSubmit = ()  => {
    localStorage.setItem('userEmail', email);
     //navigate to home
     navigate('/Home');
  } 
    return(
        <div className='.auth-inner-container'>
            <Container>
                <Row>
                 <Col className='img-container'>
                     <img src={loginPageImg} width={500} height={500} />
                 </Col>
                 <Col>
                    <Card style={{ width: '25rem', padding: 25 }}   className='auth-inner-container'> 
              <Card.Body>
              <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Confirm Password</Form.Label>
        <Form.Control type="password" placeholder=" Confirm Password" />
      </Form.Group>
      <Button variant="primary" type="submit" className='login-btn' onClick={handleSubmit}>
        Signup
      </Button>
    </Form>
        <div style={{display : 'flex', justifyContent: 'center', marginTop: 25}}> 
        Already have an account ? Please login <Card.Link style={{marginLeft: 5}} href= '/login'>Login</Card.Link>
        </div>
          </Card.Body>
             </Card>
                 </Col>
                </Row>
            </Container>
        </div>
    )
}