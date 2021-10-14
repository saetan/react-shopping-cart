import React from 'react';
import { useState, useRef } from 'react'

function UnForm(props) {

  const inputProductRef = useRef();
  const inputPriceRef = useRef();

  const handleSubmit = () => {
    props.setProducts([{
      name: inputProductRef.current.value,
      price: inputPriceRef.current.value
    }, ...props.products])
    //this will be made after we api call

  }

  return (
    <div className="Form">
      <h2>This is UnControlled Form</h2>
      <label htmlFor="productName">Name: </label>
      <input name="productName" ref={inputProductRef} type='text' />
      <label htmlFor="price">Price: </label>
      <input name='price' ref={inputPriceRef} type='text' />
      <label htmlFor="description">Description: </label>
      <input name='description' ref={inputPriceRef} type='text' />
      <input type='submit' onClick={handleSubmit} />
    </div>
  );
}

export default UnForm;
