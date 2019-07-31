import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

// const gambar = require("../img");

class ProductItem extends Component {
  render() {
    return (
      <div className="card col-3 m-5">
        {/* <div className="card-image" />
        <img className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">name</h5>
          <p className="card-text">Rp. price</p>

          <br />
          <div>
            <button className="btn btn-outline-primary btn-block">
              Details
            </button>
          </div>
          <button className="btn btn-primary btn-block">Add To Cart</button>
          <input
            ref="#"
            className="form-control"
            placeholder="Quantity"
            type="number"
            min="0"
          />
        </div> */}
        <div className="row">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={require("../img/img1.jpg")} />
            <Card.Body>
              <Card.Title>Gambar Produk</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              <i className="far fa-star" />
              <br />
              <Button variant="primary">Detail</Button>
              <Button variant="danger">Rp.300.000</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default ProductItem;
