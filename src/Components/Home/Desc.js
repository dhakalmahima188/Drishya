import React from "react";
import Button from "react-bootstrap/Button";
import { MdShoppingCart } from "react-icons/md";

export const Desc = () => {
  function prints(sn, price, name) {
    var obj = {
      sn: sn,
      name: name,
      price: price,
    };

    console.log("Yeta xa", obj);
  }

  return (
    <div>
      <div className="container_feature">
        <div className="row">
          <div className="col-sm-9 padding-right">
            <div className="features_items">
              <h2 className="title text-center "> Features</h2>
              <div className="cont">
                <div className="col-sm-4 feat">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          id="img_width"
                          src="assets/images/home/feature1.avif"
                          alt=""
                        />

                        <h2>Artificial Intellegence</h2>
                        <p>xyz</p>
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
                          src="assets/images/home/feature2.jpg"
                          alt=""
                        />

                        <h2>Agumented Reality</h2>
                        <p>Text to Speech REcognition</p>
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
                          src="assets/images/home/feature3.jpeg"
                          alt=""
                        />

                        <h2>Portable</h2>
                        <p>Handling with minimal efforts</p>
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
  );
};
