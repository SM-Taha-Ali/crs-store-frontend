import React, { useState, useEffect } from 'react';
import OrderUserProduct from './OrderUserProduct';

const OrderUserTr = (props) => {
  const { order, allUsers, products } = props

  const [orderStatus, setOrderStatus] = useState(0);

  let price = 0
  order.products.forEach(product_id => {
    products.forEach(product => {
      if (product_id == product._id) {
        price += parseInt(product.price)
      }
    });
  });

  console.log(order.status)

  return (
    <>
      <div className="col-lg-4 col-md-12 col-sm-12 px-3">
        <div className="user-order-card shadow pb-3">
          <div className="user-order-card-header">
            <h3>Order #3</h3>
          </div>
          <div className="user-order-card-body">
            <div className='d-flex justify-content-between pb-2 text-Red'>
              <h4>Product Name</h4>
              <h4>Price</h4>
            </div>
            {
              order.products.map((product, i) => {
                return <OrderUserProduct key={i} products={products} product={product} />
              })
            }

            <hr />
            <div className='d-flex justify-content-between'>
              <p className='fs-4 fw-bold text-Red'>Total</p>
              <p className='fs-4 fw-bold '>{price}RS</p>
            </div>
            <hr />
          </div>
          <h3 className='user-order-card-footer-header'>Order-Status</h3>
          <div className="user-order-card-footer">
            <div className="order-status mt-4 position-relative">
              <div className="orderStatusWrapper position-relative">
                <div className='orderStatusBar'>
                  <li className={`packed ${order.status==1?'active':""}`}>Packed</li>
                  <li className={`shipping ${order.status==2?'active':""}`}>Shipped</li>
                  <li className={`delivered ${order.status==3?'active':""}`}>Delievered</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderUserTr;
