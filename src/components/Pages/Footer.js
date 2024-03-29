import React, { Component } from "react";
import styled, { css } from "styled-components";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <FooterContainer className="main-footer">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              {/* Column 1 */}
              <div className="col-md-3 col-sm-6">
                <h4>Lorem ipsum</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Tokoben description</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">Tokoben description</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">Tokoben description</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">Tokoben description</a>
                  </li>
                </ul>
              </div>
              {/* Column 2 */}
              <div className="col-md-3 col-sm-6">
                <h4>Lorem ipsum</h4>
                <ul className="list-unstyled">
                  <li>Tokoben description</li>
                  <li>Tokoben description</li>
                  <li>Tokoben description</li>
                  <li>Tokoben description</li>
                </ul>
              </div>{" "}
              {/* Column 3 */}
              <div className="col-md-3 col-sm-6">
                <h4>Lorem ipsum</h4>
                <ul className="list-unstyled">
                  <li>Tokoben description</li>
                  <li>Tokoben description</li>
                  <li>Tokoben description</li>
                  <li>Tokoben description</li>
                </ul>
              </div>
              {/* Column 4 */}
              <div className="col-md-3 col-sm-6">
                <h4>Lorem ipsum</h4>
                <ul className="list-unstyled">
                  <li>Tokoben description</li>
                  <li>Tokoben description</li>
                  <li>Tokoben description</li>
                  <li>Tokoben description</li>
                </ul>
              </div>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Benedictus Shop - All Right
                Reserved
              </p>
            </div>
          </div>
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainYellow);
    padding-top: 3rem;
    color: var(--mainDark);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }
  ul li a:hover {
    color: var(--mainWhite);
  }
`;
