import React from "react";
import { useStateContext } from "../context/StateProvider";
import {BsTrashFill} from "react-icons/bs"

const Cart = () => {
  const { state: {cart}, dispatch } = useStateContext();


  const {totalItems , totalPrice} = cart.reduce((acc, cur) => {
    acc.totalItems += cur.qty;
    acc.totalPrice += cur.price * cur.qty
      return acc ;
  },{
    totalItems:0,
    totalPrice:0
  })

  
  return (
    <div className="row">

        {
          cart.length > 0 ? (
            <>
            <div className="col-md-8 ">
            <table class="table table-dark m-2">
              <thead>
                <tr>
                  <th className="col-sm-4">Product</th>
                  <th className="col-sm-2">Name</th>
                  <th className="col-sm-2">Qty</th>
                  <th className="col-sm-2">Price</th>
                  <th className="col-sm-2">Subtotal</th>
                  <th className="col-sm-2"></th>
                </tr>
              </thead>
              <tbody>
              {
                cart.map((item) => (
                  <tr key={item.id}>
                    <td><img src={item.thumbnail} className="img_cart"  alt={item.title} /></td>
                    <td>{item.title.slice(0, 10)}</td>
                    <td>{item.qty}</td>
                    <td>{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(item.price)}</td>
                    <th className="col-sm-2">{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(item.price * item.qty)}</th>
    
                    <td className="text-danger">
                      <BsTrashFill 
                       onClick={() => {
                        dispatch({
                          type:"DELETE_FROM_CART",
                          payload:item
                        })
                      } }
                      role="button"
                       size={25} /> 
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
                      {/* total */}
          <div className="col-md-4">
                      <table class="table table-dark m-2">
        <thead>
          <tr>
            <th scope="col">Total Items</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{totalItems} </th>
            <td> {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(totalPrice)} </td>
          </tr>
        </tbody>
      </table>
          </div>
            </>
          ) : (
            <>
                <h3 className="text-center ">
                  YOUR CART ITS EMPTY
                </h3>
            </>
            
          ) 
        } 
      
    </div>
  );
};

export default Cart;
