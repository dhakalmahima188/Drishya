import React from 'react'

export const Header = () => {
  return (
    <div>  <header id="header">
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
  </header></div>
  )
}
