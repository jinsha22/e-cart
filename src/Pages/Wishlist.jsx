import React from 'react'
import { Row,Card, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';
import Header from '../Component/Header';

function Wishlist() {
  //get wishlist from the store
  const wishlist=useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  // console.log(wishlist);
  const handlecart=(product)=>{
    dispatch(removeFromWishlist(product?.id))
    dispatch(addToCart(product))
  }
  return (
<>
<Header/>
      <div style={{marginTop:'80px'}}>
        <div className='container'>
          <Row className='mt-5'>
            {wishlist?.length>0?wishlist?.map((product,index)=>(
              <Col key={index} style={{marginBottom:'10px'}}  sm={12} md={6} lg={4} x1={3}>
               <Card className='card shadow' style={{width:'18rem'}}>
               <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
               <Card.Body>
                 <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
                 <div className='d-flex justify-content-between '>
                    <button onClick={()=>dispatch(removeFromWishlist(product?.id))} className='btn btn-link'><i className='fa-solid fa-heart-circle-minus text-danger'></i></button>
                    <button className='btn btn-link' onClick={()=>handlecart(product)}><i className='fa-solid fa-cart-plus text-success'></i></button>
                 </div>
               </Card.Body>
             </Card>
             </Col>
            )):
           <div style={{height:'40vh'}} className='d-flex justify-content-centerr align-items-center w-100 mb-5'> 
            <img className='img-fluid' style={{height:'200px'}} src="https://i.pinimg.com/originals/01/b7/dc/01b7dc998eb5dd6650ac2ed99f865587.jpg" alt="empty cart" />
            <h2>Your Wishlist is empty!!..</h2>
           </div>
          }
          </Row>
        </div>
  
        </div>
  
</>  
 )
}

export default Wishlist