import React from 'react';

function MyShoppingCart(props) {
  const cartItems = props.cartList.map((record) =>
    <li onClick={() => { handClick(record) }}>{`${record.name} - $ ${record.price}`}</li>
  )

  const handClick = (item) => {
    const newCart = props.cartList.filter(word => item.name !== word.name);
    props.setCart(newCart);
  }

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      {cartItems}
    </div>
  );
}

export default MyShoppingCart;
