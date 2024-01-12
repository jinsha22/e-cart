import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { AddToWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';
import Header from '../Component/Header';

function View() {
  const {id}=useParams()
  console.log(id);
  const [product,setProduct]=useState({})
  const wishlist=useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  useEffect(()=>{
    const allProducts=JSON.parse(sessionStorage.getItem("allProducts"))
    setProduct(allProducts?.find(item=>item.id==id))
  },[])
  // console.log(product);
  // console.log(wishlist);

  const handleWishlist=(product)=>{
    const existingproduct=wishlist?.find(item=>item.id==product.id)
    if(existingproduct){
      alert("Product already in your wishlist")
    }
    else{
      dispatch(AddToWishlist(product))
    }
  }
  return (
<>
<Header/>
      <div style={{paddingTop:'100px'}} className='container mt-5  mb-5'>
        <Row className='align-items-center'>
          <Col>
             <img src={product?.thumbnail} alt=""  className='img-fluid' height={'300px'}/>
          </Col>
          <Col>
             <span>PID: {product?.price}</span>
             <h1>{product?.title}</h1>
             <h5 className='fw-bold text-primary'>${product?.price}</h5>
             <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description</span>: {product?.description}</p>
             <div className='d-flex justify-content-between mt-5'>
              <button className='btn btn-outline-dark' onClick={()=>handleWishlist(product)}><i className='fa-solid fa-heart text-danger'> Add to wishlist</i></button>
              <button className='btn btn-outline-dark' onClick={()=>dispatch(addToCart(product))}><i className='fa-solid fa-cart-plus text-success'> Add to cart</i></button>
             </div>
          </Col>
        </Row>
        </div>
  
</>  
  )
}

export default View
