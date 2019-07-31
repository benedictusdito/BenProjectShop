import React, { Component } from "react";

import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Carousel,
  Card,
  Button
} from "react-bootstrap";
import Footer from "./Footer";

import ProductItem from "../ProductItem";

class Home extends React.Component {
  //   renderList = () => {
  //     return this.state.products.map(item => {
  //       return <ProductItem barang={item} />;
  //     });

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-2 bg-light">
          <ul className="list-group list-group-flush">
            <ListGroup>
              <ListGroup.Item className="bg-warning font-weight-bold">
                {" "}
                <i className=" mr-2 fas fa-list"> </i>
                KATEGORI PRODUK
              </ListGroup.Item>
              <ListGroup.Item>
                <i className=" mr-2 fas fa-angle-right" />
                Kaos Bambo
              </ListGroup.Item>
              <ListGroup.Item>
                <i className=" mr-2 fas fa-angle-right" />
                Kaos Kaki Bambo
              </ListGroup.Item>
              <ListGroup.Item>
                <i className=" mr-2 fas fa-angle-right" />
                Kemeja Pria
              </ListGroup.Item>
              <ListGroup.Item>
                <i className=" mr-2 fas fa-angle-right" />
                Dll
              </ListGroup.Item>
            </ListGroup>
            <div className="row mt-5">
              <div className="col bg-light">
                <div className="list-gorup list-group-flush">
                  <div className="mx-auto card ml-2">
                    <div className="card-body">
                      <ListGroup.Item className="mx-auto bg-warning font-weight-bold">
                        {" "}
                        <i className="mr-2 fas fa-search" />
                        SEARCH
                      </ListGroup.Item>
                      <div className="card-title mt-1">
                        <h4>
                          {" "}
                          <i className=" mr-2 fas fa-angle-right" />
                          Name
                        </h4>
                      </div>
                      <form className="input-group">
                        <input
                          // ref={input => (this.name = input)}
                          className="form-control"
                          type="text"
                        />
                      </form>
                      <div className="card-title mt-1">
                        <h4>
                          {" "}
                          <i className=" mr-2 fas fa-angle-right" />
                          Price
                        </h4>
                      </div>
                      <form className="input-group">
                        <input
                          placeholder="Minimum"
                          // ref={input => (this.min = input)}
                          className="form-control mb-2"
                          type="text"
                        />
                      </form>
                      <form className="input-group">
                        <input
                          placeholder="Maximum"
                          // ref={input => (this.max = input)}
                          className="form-control"
                          type="text"
                        />
                      </form>
                      <button
                        //   onClick={this.onBtnSearch}
                        className="btn btn-outline-secondary btn-block mt-5"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row col-10" />
            </div>
          </ul>
        </div>

        <div className="col-md-10">
          {" "}
          <Carousel className="col-md-10">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="col-md-10 m-4">
            <h4 className="text-center font-weight-bold"> PRODUK </h4>
            <div className="col-md-10 m-4">
              <ProductItem />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
