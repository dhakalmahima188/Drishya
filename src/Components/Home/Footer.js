import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MdPermPhoneMsg, MdMarkEmailUnread, MdRoom } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="footer">
   
      <footer id="footer">
       
          <section className="">
            <br></br>
            <br></br>
            <MDBContainer className=" text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Spectacle
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Sunglass Model
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      AR integrated
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <MdRoom />
                    Pulchowk Campus, Lalitpur
                  </p>
                  <p>
                    <MdMarkEmailUnread />
                    info@example.com
                  </p>
                  <p>
                    <MdPermPhoneMsg /> 9742357373
                  </p>
                  <p>
                    <MdPermPhoneMsg /> 9816475177
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
          </footer>
          <div
            className="text-center "
            style={{ backgroundColor: "whitesmoke" }}
          >
            © 2022 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              TEAM PNP
            </a>
          </div>
        
     
    </div>
  );
};
