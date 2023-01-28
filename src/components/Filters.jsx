import React from "react";
import { useStateContext } from "../context/StateProvider";
import Stars from "./Stars";

const Filters = ({setProduct, products}) => {
        
    //context filters
    const { filter:{sort,rate},
    dispFilter} = useStateContext();


  return (
    <div className="filter_box">

      <h5 className="">Filters</h5>
                                        {/*Ascending filter*/}
      <div className="form-check my-4">
        <label className="form-check-label">
          <input
          value="low"
            onChange={(e) => {
                dispFilter({
                    type:"SORT_CHANGE",
                    payload:e.target.value
                })
            } }
           className="form-check-input" type="radio" name="optradio" />
          Ascending
        </label>
      </div>
                                            {/*Descending filter*/}
      <div className="form-check my-4">
        <label className="form-check-label">
          <input
            onChange={(e) => {
                dispFilter({
                    type:"SORT_CHANGE",
                    payload:e.target.value
                })
            } }
          value="high"
           className="form-check-input" type="radio" name="optradio" />
          Descending
        </label>
      </div>

      {/*stars components*/}
      <div className="my-4 " role="button">
        <Stars rating={rate}  onClick={(i) => {
        dispFilter({
            type:"RATE_CHANGE",
            payload:i+1
        })
        }}/>
      </div>

      <div className="my-4">

      </div>

      <div className="">
        <button 
         onClick={() => {
            dispFilter({
                type:"CLEAR",
            })
            }}
        type="button" className="btn btn-danger my-4">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
