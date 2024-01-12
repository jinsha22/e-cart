import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, navigateToNextPage, navigateToPrePage } from '../Redux/Slices/productSlice';
import { Col, Row, Spinner, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Component/Header'


function Home() {
  const dispatch = useDispatch()
const { allProducts,loading,error,productPerPage,CurrentPage}= useSelector(state=>state.productReducer)
const totalpages = Math.ceil(allProducts?.length/productPerPage)
const lastProductIndex = CurrentPage*productPerPage

const firstProductIndex=lastProductIndex-productPerPage
 const visibleProductCard = allProducts?.slice(firstProductIndex,lastProductIndex)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  console.log(allProducts , loading, error);
const handlePrevPage = ()=>{
  if(CurrentPage!=1){
    dispatch(navigateToPrePage())
  }
}
const handleNextPage = ()=>{
  if(CurrentPage!=totalpages){
    dispatch(navigateToNextPage())
  }
}

  return (
<>
<Header insideHome/>
      <div style={{paddingTop:'100px'}}>
        {
          loading? <div className='text-center'><Spinner animation="border" variant="primary" />Loading..
          </div>:
        <Row className='m-5'>
          {allProducts.length>0 ?visibleProductCard?.map((product,index)=>(
          <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
  <Card class='' style={{ width: '18rem'}}>
        <Card.Img  variant="top" src={product?.thumbnail} style={{height:'200px'}}/>
        <Card.Body>
          <Card.Title className='fw-bold' style={{color:'black'}}>{product.title.slice(0,20)}...</Card.Title>
          <Link to={`/view/${product?.id}`} variant="primary">View More</Link>
        </Card.Body>
      </Card>
      </Col>
          )): <div className='fw-bolder text-danger text-center mt-5'> Product Not Found</div>
          }
        </Row>
        }

    <div className="d-flex justify-content-center mt-5" >
      <span onClick={handlePrevPage} style={{cursor:'pointer'}} > <i className="fa-solid fa-backward me-2" > </i>    </span>
      <span className='fw-bolder'>{CurrentPage} of {totalpages}  </span>
      <span onClick={handleNextPage}style={{cursor:'pointer'}} > <i className="fa-solid fa-forward me-2" > </i>    </span>

    </div>

      </div>
  
</>  )
}

export default Home