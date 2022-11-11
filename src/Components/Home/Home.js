import React, { useRef } from "react";
import "../../App.css";
import ModelViewer from "../3dModel/modelloader";
import Card from "react-bootstrap/Card";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Feature } from "./Feature";

const Home = () => {
  const canvasRef = useRef(null);
  return (
    <div>
      <Header />

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
                      <ModelViewer
                        scale="2"
                        modelPath={"assets/obj/headphone_modelling3.glb"}
                      />

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
      <Feature />

      <Footer />
    </div>
  );
};
export default Home;
