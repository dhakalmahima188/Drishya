import React from 'react'

export const Footer = () => {
  return (
    <div>  <footer id="footer">
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
  </footer></div>
  )
}
