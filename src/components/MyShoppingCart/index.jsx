import React from 'react';

function MyShoppingCart(props) {
  const cartItems = props.cartList.map((record, index) =>
    <li key={index} onClick={() => { handClick(record, index); }}>{`${record.name} - $ ${record.price}`}</li>
  )

  const handClick = (item, index) => {
    console.log(index);
    const newCart = props.cartList.filter((word, nIndex) => {
      console.log(nIndex);
      return index !== nIndex
    });
    props.setCart(newCart)
  }

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      {cartItems}
    </div>
  );
}

export default MyShoppingCart;
