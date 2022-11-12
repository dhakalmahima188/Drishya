import React from "react";
import Button from 'react-bootstrap/Button';

export const Feature = () => {
   function prints(sn,price,name){
   
   
var obj={
  sn: sn,
  name:name,
  price:price
}
  

console.log("Yeta xa",obj)
 

  }




  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Our Products</h2>
                <div className="cont">
                  <div className="col-sm-4 feat">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img
                            id="img_width"
                            src="assets/images/home/product1.jpg"
                            alt=""
                          />

                          <h2 >$56</h2>
                          <p >Sunglass Black Edition</p>
                        </div>
                        <div className="product-overlay">
                          <div className="overlay-content">
                            <h2 id="p1">$50</h2>
                            <p id= 'n1'>Sunglass Black Edition</p>
                            <Button variant="primary" onClick={() => prints( 1,document.getElementById("p1").innerHTML, document.getElementById("n1").innerHTML) }><i className="fa fa-shopping-cart"></i>Add to cart</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>





                  <div className="col-sm-4 feat">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img
                            id="img_width"
                            src="assets/images/home/product2.jpg"
                            alt=""
                          />

                          <h2>$56</h2>
                          <p>Easy Red  Edition</p>
                        </div>
                        <div className="product-overlay">
                        <div className="overlay-content">
                            <h2 id="p2">$56</h2>
                            <p id= 'n2'>Easy red  Edition</p>
                            <Button variant="primary" onClick={() => prints( 2,document.getElementById("p2").innerHTML, document.getElementById("n2").innerHTML) }><i className="fa fa-shopping-cart"></i>Add to cart</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4 feat">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img
                            id="img_width"
                            src="assets/images/home/product3.jpg"
                            alt=""
                          />

                          <h2>$26</h2>
                          <p>Simple Edition</p>
                        </div>
                        <div className="product-overlay">
                        <div className="overlay-content">
                            <h2 id="p3">$26</h2>
                            <p id= 'n3'>Simple Edition</p>
                            <Button variant="primary" onClick={() => prints( 3,document.getElementById("p3").innerHTML, document.getElementById("n3").innerHTML) }><i className="fa fa-shopping-cart"></i>Add to cart</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
