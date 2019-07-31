import React, { Component } from "react";

class SearchFilter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="mt-5">
            <div className="mx-auto card">
              <div className="card-body">
                <div className="border-bottom border-secondary card-title">
                  <h1>Search</h1>
                </div>
                <div className="card-title mt-1">
                  <h4>Name</h4>
                </div>
                <form className="input-group">
                  <input
                    // ref={input => (this.name = input)}
                    className="form-control"
                    type="text"
                  />
                </form>
                <div className="card-title mt-1">
                  <h4>Price</h4>
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
    );
  }
}

export default SearchFilter;
