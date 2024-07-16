import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SuccessImg from '../assets/success.png';
import QRImg from '../assets/qr.png';

const Success = () => {
    return(
        <div>
            <Row>
                <Col>
                    <div  style={{ padding:50, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                        <div>
                 <img src={SuccessImg} height={150}/>
                 </div>
                 <div>
                    <h5>Tickets confirmed</h5>
                    <h6>Enjoy your movie</h6>
                 </div>
                 </div>
                </Col>
                <Col>
                <div  style={{ padding:50, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <img src={QRImg} height={150}/>
                </div>
                </Col>
            </Row>
        </div>
    )
}

export default Success;