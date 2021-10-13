import React from 'react';

function AllTheThings(props) {

  const productList = props.products.map((record, index) =>
    <li key={index} onClick={() => { handClick(record) }}>{`${record.name} - $ ${record.price}`}</li>
  );

  const handClick = (item) => {
    props.setCart([...props.cartList, item]);
  }
  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>
        {productList}
      </ul>
    </div>


  );
}

export default AllTheThings;
