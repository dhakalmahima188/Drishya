import React, { useRef } from 'react';
import '../../App.css';
import  ModelViewer from "../3dModel/modelloader";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Home = () => {
  const canvasRef = useRef(null)
  return (
    <div>
      <header id="header">
        <div class="header_top">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <div class="header-bottom">
                  <div class="container">
                    <div class="mainmenu pull-left">
                      <ul class="nav navbar-nav collapse navbar-collapse">
                        <li>
                          <a href="#" class="active">
                            Home
                          </a>
                        </li>
                        <li class="dropdown">
                          <a href="#">
                            Feature<i class="fa fa-angle-down"></i>
                          </a>
                          <ul role="menu" class="sub-menu">
                            <li>
                              <a href="#">Products</a>
                            </li>
                            <li>
                              <a href="#">Product Details</a>
                            </li>
                            <li>
                              <a href="#">Checkout</a>
                            </li>
                            <li>
                              <a href="#">Cart</a>
                            </li>
                            <li>
                              <a href="#">Login</a>
                            </li>
                          </ul>
                        </li>
                        <li class="dropdown">
                          <a href="#">
                            Description<i class="fa fa-angle-down"></i>
                          </a>
                          <ul role="menu" class="sub-menu">
                            <li>
                              <a href="#">Blog List</a>
                            </li>
                            <li>
                              <a href="#">Blog Single</a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="slider">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div
                id="slider-carousel"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#slider-carousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#slider-carousel" data-slide-to="1"></li>
                  <li data-target="#slider-carousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                <div class="item active">
                    <div class="col-sm-6">
                      <h1>
                        <span>THE</span>-POST
                      </h1>
                      <h2>100% Responsive Design</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.{" "}
                      </p>
                      <button type="button" class="btn btn-default get">
                        Get it now
                      </button>
                    </div>
                    <div class="col-sm-6">
                      <ModelViewer scale="120" modelPath={"assets/obj/headphone_modelling3.glb"} />
        
                      {/* <canvas id="sumreed" ></canvas> */}
                      {/* <img
                        src="assets/images/home/pricing.png"
                        class="pricing"
                        alt=""
                      /> */}
                    </div>
                  </div>

                  
                  <div class="item">
                    <div class="col-sm-6">
                      <h1>
                        <span>THE</span>-POST
                      </h1>
                      <h2>100% Responsive Design</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.{" "}
                      </p>
                      <button type="button" class="btn btn-default get">
                        Get it now
                      </button>
                    </div>
                    {/* <div class="col-sm-6">
                      <img
                        src="assets/images/home/girl2.jpg"
                        class="girl img-responsive"
                        alt=""
                      />
                      <img
                        src="assets/images/home/pricing.png"
                        class="pricing"
                        alt=""
                      />
                    </div> */}
                  </div>

                  <div class="item">
                    <div class="col-sm-6">
                      <h1>
                        <span>THE</span>-POST
                      </h1>
                      <h2>Free Ecommerce Template</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.{" "}
                      </p>
                      <button type="button" class="btn btn-default get">
                        Get it now
                      </button>
                    </div>
                    <div class="col-sm-6">
                      <img
                        src="assets/images/home/girl3.jpg"
                        class="girl img-responsive"
                        alt=""
                      />
                      <img
                        src="assets/images/home/pricing.png"
                        class="pricing"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <a
                  href="#slider-carousel"
                  class="left control-carousel hidden-xs"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-left"></i>
                </a>
                <a
                  href="#slider-carousel"
                  class="right control-carousel hidden-xs"
                  data-slide="next"
                >
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row">
            <div class="col-sm-9 padding-right">
              <div class="features_items">
                <h2 class="title text-center">Featured Items</h2>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product1.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart">
                          <i class="fa fa-shopping-cart"></i>Add to cart
                        </a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart">
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product2.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart">
                          <i class="fa fa-shopping-cart"></i>Add to cart
                        </a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart">
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product6.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart">
                          <i class="fa fa-shopping-cart"></i>Add to cart
                        </a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart">
                            <i class="fa fa-shopping-cart"></i>Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="category-tab">
                <div class="col-sm-12">
                  <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                      <Col>
                        <Card>
                          <Card.Img
                            variant="top"
                            src="assets/images/home/fax.png"
                          />
                          <Card.Body>
                            <Card.Title>Feature 1</Card.Title>
                            <Card.Text>
                              This is a longer card with supporting text below
                              as a natural lead-in to additional content. This
                              content is a little bit longer.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div class="footer-widget">
          <div class="container">
            <div class="row">
              <div class="col-sm-2">
                <div class="single-widget">
                  <h2>About POST</h2>
                  <ul class="nav nav-pills nav-stacked">
                    <li>
                      <a href="#">Company Information</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Store Location</a>
                    </li>
                    <li>
                      <a href="#">Affillate Program</a>
                    </li>
                    <li>
                      <a href="#">Copyright</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3 col-sm-offset-1">
                <div class="single-widget">
                  <h2>About POST</h2>
                  <form action="#" class="searchform">
                    <input type="text" placeholder="Your email address" />
                    <button type="submit" class="btn btn-default">
                      <i class="fa fa-arrow-circle-o-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <h5 class="pull-left">
                Copyright © 2020 THERICH-SHOP Inc. All rights reserved.
              </h5>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
