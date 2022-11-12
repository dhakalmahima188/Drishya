import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
export const Footer = () => {
  return (
    <div className="footer">
      {" "}
      <footer id="footer">
        <MDBFooter
          bgColor="light"
          className=" text-lg-start text-muted"
        >
          <section className="">
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
                    <MDBIcon color="secondary" icon="home" className="me-2" />
                    Pulchowk Campus, Lalitpur
                  </p>
                  <p>
                    <MDBIcon
                      color="secondary"
                      icon="envelope"
                      className="me-3"
                    />
                    info@example.com
                  </p>
                  <p>
                    <MDBIcon color="secondary" icon="phone" className="me-3" />{" "}
                    + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon color="secondary" icon="print" className="me-3" />{" "}
                    + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "whitesmoke" }}
          >
            © 2022 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              TEAM PNP
            </a>
          </div>
        </MDBFooter>
      </footer>
    </div>
  );
};
