import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div  className='text-white bg-info ' style={{marginTop:'80px'}}>
        <Row>
            <Col className='p-3'>
           
            <i className="fa-solid fa-truck "></i> Daily Cart <br />
           <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iure eligendi maxime amet facis enim!</b></p>
            </Col>
            <Col>
            <h5>Links</h5>
            <a href="/" style={{textDecoration:'none', color:'black'}}>Home</a><br />
            <a href="/cart" style={{textDecoration:'none', color:'black'}}>Cart</a><br />
            <a href="/wishlist" style={{textDecoration:'none', color:'black'}}>Wishlist</a><br />
            </Col>
            <Col>
            <h5>Guides</h5>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>Routing</p>
            </Col>
            <Col>
            <h5><span>Contact us</span></h5>
            <input type="text" placeholder='enter email'/><br />
            <button type='button' className='mt-2 text-white' style={{width:'213px', backgroundColor:'black'}}>send</button> <br />
            <i className="fa-brands fa-instagram ps-3"></i>  <i className="fa-brands fa-facebook ps-3"></i>
            <i className="fa-brands fa-twitter ps-3"></i> <i className="fa-brands fa-github ps-3"></i>
            </Col>
        </Row>
    </div>
  )
}

export default Footer