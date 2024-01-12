import React, { useEffect, useState } from 'react'
import { Navbar,Nav,Container,Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { searchByProducts } from '../Redux/Slices/productSlice'

function Header({insideHome}) {
  const wishlist=useSelector(state=>state.wishlistReducer)
  const cart=useSelector(state=>state.cartReducer)
  const dispatch = useDispatch ()
  return (
    <Navbar expand="lg" className="bg-info w-100 fixed" style={{zIndex:1}}>
    <Container>
    <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-truck"></i> Daily Cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
{insideHome&&<Nav.Link>  <input  onChange={e=>dispatch(searchByProducts(e.target.value.toLowerCase()))} type="text"style={{borderRadius:'10px'}}  placeholder='search Products Here!!!' className='rounded p-1'/></Nav.Link>}
          <Nav.Link><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}><i className='fa-solid fa-heart text-danger'/>
           Wishlist <Badge className='bg-light text-dark'>{wishlist?.length}</Badge></Link></Nav.Link>
          <Nav.Link><Link to={'/cart'} style={{textDecoration:'none',color:'white'}}><i className='fa-solid fa-cart-plus text-success'/>
          Cart <Badge className='bg-light text-dark'>{cart?.length}</Badge></Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header