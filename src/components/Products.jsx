import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import {useSelector, useDispatch} from "react-redux";
import { addCart } from '../store/cartSlice';
import { getProducts } from '../store/productsSlice';
import StatusCode from '../utils/StatusCode';


const Products = () => {
      const {data: products, status} = useSelector((state)=>state.products)

    const dispatch = useDispatch();

    useEffect(()=>{
        
        // dispatch an action for fetchProducts 
        dispatch(getProducts())
        
    },[]);

    if(status === StatusCode.LOADING){
      return <p>Loading...</p>
    }
    if(status === StatusCode.ERROR){
      return <Alert key="danger" variant='danger'>Something went wrong! Try again later</Alert>
    }

    const addToCart = (product) =>{
      //dispatch an addCard action
      dispatch(addCart(product));

    }


    const cards = products.map((product) =>(        
        <div className="col-md-3" style={{marginBottom:"10px"}}>
            <Card key={product.id} className='h-100'>
              <div className='text-center'>
              <Card.Img variant="top" src={product.image} style={{width:"100px", height:"130px"}}/>
              </div>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  INR: {product.price}
                </Card.Text> 
              </Card.Body>

              <Card.Footer style={{background:"white"}}>
              <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
              </Card.Footer>
            </Card>
        </div>
    ));

  return (
    <div>
        <h2 className='text-primary'>Product Dashboard</h2>
        <div className="row">
            {cards}
          
            
        </div>
    </div>
  )
}

export default Products