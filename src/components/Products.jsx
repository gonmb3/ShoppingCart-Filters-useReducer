import { useEffect, useState } from "react";
import { useStateContext } from "../context/StateProvider";
import Filters from "./Filters";

import Stars from "./Stars";

const Products = () => {
  //context cart
  const {
    state: { search },
    dispatch,
  } = useStateContext();

      //context filters
      const { filter:{sort,rate},
      dispFilter} = useStateContext();


  //products state
  const [products, setProducts] = useState([]);

  const allProducts = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();

    setProducts(data.products);
  };

  useEffect(() => {
    allProducts();
  }, []);

    //filter products "by" function
  const filteredProducts = () => {
    let newProduct = products;
    if(sort){
        newProduct = newProduct.sort((a,b) => {
          return  sort === "low" ? a.price - b.price : b.price - a.price;
        })
    }
    if(rate){
      newProduct = newProduct.filter((i) => {
        return Math.round(i.rating) > rate-1;
      })
    }
    return newProduct
}


  return (
    <div className="container-fluid">
      <h1 className="text-center my-5 ">Products</h1>
       <div className="row py-4">
          <div className="col-md-2">
            <div className="row">   
                        {/* FILTERS COMPONENT*/}
                <Filters  />
            </div>
        </div>

        <div className="col-md-10">
          <div className="row">
            {filteredProducts() // filter search input by title || brand
              .filter(
                (p) =>
                  p.title.toLowerCase().includes(search) ||
                  p.brand.toLowerCase().includes(search)
              )
              .map((product) => (
                <div className="col-3 py-2">
                  <div className="main_box">
                    <img
                      src={product.thumbnail}
                      alt="product-img"
                      className="img_box"
                    />
                    <div className="text_box">
                      <h4>{product.title.slice(0, 18)}</h4>
                      <p>
                        {new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "USD",
                        }).format(product.price)}
                      </p>

                      {/* STAR COMPONENT */}
                      <div className="flex text-warning">
                        <Stars rating={product.rating} />
                      </div>

                      <p>{product.description.slice(0, 34)}</p>
                      <button
                        onClick={() => {
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: product,
                          });
                        }}
                        className="btn btn-primary"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
