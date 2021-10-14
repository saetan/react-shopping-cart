import React from 'react';
import { useState, useRef } from 'react'

function validatePrice(price) {

  let re = /\d*(?:[.]\d{3})*(?:[.,]\d{2})/;

  return re.test(String(price));
}

function Form(props) {

  const [isDisabled, setDisabled] = useState(true);

  const [isPriceValid, setIsPriceValid] = useState(false);

  const [isNameValid, setIsNameValid] = useState(false);

  const [isDescriptionValid, setIsDescriptionValid] = useState(false);

  const [productDetails, setProductdetails] = useState({ name: "", price: 0.00, description: "" });

  const handleSubmit = () => {
    props.setProducts([productDetails, ...props.products])
    //this will be made after we api call

  }

  const handleNameChange = (event) => {
    setProductdetails({
      ...productDetails,
      name: event.target.value
    })
  }

  const handlePriceChange = (event) => {
    setProductdetails({
      ...productDetails,
      price: event.target.value
    })
  }

  const handleDescriptionChange = (event) => {
    setProductdetails({
      ...productDetails,
      description: event.target.value
    })
  }

  const onPriceBlur = () => {
    setIsPriceValid(validatePrice(productDetails.price));
  }

  const onNameBlur = () => {
    if (productDetails.name === "") {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
  }

  const onDescriptionBlur = () => {
    if (productDetails.description === "") {
      setIsDescriptionValid(false);
    } else {
      setIsDescriptionValid(true);
    }
  }

  return (
    <>
      <h2>This is Controlled Form</h2>
      <div className="Form">
        <input name="productName" type='text' value={productDetails.name} placeholder="name" onChange={handleNameChange} onBlur={onNameBlur} />
        <input name='price' type='text' placeholder="price" onChange={handlePriceChange} onBlur={onPriceBlur} />
        <input name='description' type='text' placeholder="description" onChange={handleDescriptionChange} onBlur={onDescriptionBlur} />
        <input type='submit' onClick={handleSubmit} disabled={(isNameValid && isDescriptionValid && isPriceValid) === false} />
      </div>
      {isPriceValid ? '' : <p> Pricing not valid, number only, E.g: 6.99</p>}
      {isNameValid ? '' : <p> Naming not valid, cannot be empty</p>}
      {isDescriptionValid ? '' : <p> Description not valid, cannot be empty</p>}
    </>
  );
}

export default Form;
