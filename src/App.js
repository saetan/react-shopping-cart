// import useState
import React, { useState, useRef } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import UnForm from './components/Uncontrolled Form';
import productsArr from './products';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);
  const [formState, setFormState] = useState("ControlledForm");

  const onControlledFormSelected = () => {
    setFormState(chooseControlledFormRef.current.value);

  }

  const onUnControlledFormSelected = () => {
    setFormState(chooseUnControlledFormRef.current.value);
  }


  const chooseControlledFormRef = useRef();
  const chooseUnControlledFormRef = useRef();

  // create an addToCart function that takes in a product as a param
  // using the ...spread operator add the product to the cart array

  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed
  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <label htmlFor="ControlledForm">Controlled Form</label>
      <input name='chooseFormType' ref={chooseControlledFormRef} type='radio' value="ControlledForm" id="ControlledForm" onChange={onControlledFormSelected} defaultChecked={true} />
      <label htmlFor="UnControlledForm">UnControlled Form</label>
      <input name='chooseFormType' ref={chooseUnControlledFormRef} type='radio' value="UnControlledForm" id="UnControlledForm" onChange={onUnControlledFormSelected} />
      {
        formState === "ControlledForm" ? <Form products={products} setProducts={setProducts} /> : <UnForm products={products} setProducts={setProducts} />
      }
      <div className="products">
        <AllTheThings products={products} setCart={setCart} cartList={cart} />
        <MyShoppingCart cartList={cart} setCart={setCart} />
      </div>
    </div>
  );
}
