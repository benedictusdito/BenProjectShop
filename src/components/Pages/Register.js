import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div>
        {" "}
        <div>
          <div className="mt-5 row">
            <div className="col-sm-4 mx-auto card">
              <div className="card-body">
                <div className="border-bottom border-secondary card-title">
                  <h1>Register</h1>
                </div>

                <div className="card-title">
                  <h4>User Name</h4>
                </div>
                <form className="input-group">
                  <input
                    className="form-control"
                    ref={input => {
                      this.username = input;
                    }}
                  />
                </form>
                <div className="card-title">
                  <h4>Email</h4>
                </div>
                <form className="input-group">
                  <input
                    className="form-control"
                    ref={input => {
                      this.email = input;
                    }}
                  />
                </form>
                <div className="card-title">
                  <h4>Password</h4>
                </div>
                <form className="input-group">
                  <input
                    className="form-control"
                    type="password"
                    ref={input => {
                      this.password = input;
                    }}
                  />
                </form>

                <button
                  onClick={this.onButtonClick}
                  className="btn btn-success mt-3"
                >
                  Login Now
                </button>
                <p>
                  Sudah memiliki akun ? <Link to="/login">Login Disini</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
