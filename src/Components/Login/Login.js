import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EmailAddress: "",
      Password: "",
    };
  }
  render() {
    return (
      <div className="Form">
        <Form className="Form2">
          <div style={{ width: "250px", textAlign: "center" }}>
            {" "}
            <h1 style={{ letterSpacing: "0.2 rem" }}>ARARA</h1>
          </div>

          <div
            style={{
              fontWeight: "500px",
              fontFamily: "Roboto",
              letterSpacing: "0.1rem",
              fontSize: "22px",
              marginTop: "45px",
            }}
          >
            New Customer
          </div>
          <p>Create an account to checkout</p>
          <Form.Field style={{ marginTop: "30px" }}>
            <p
              style={{
                fontFamily: "sans-serif",
                fontWeight: "300px",
                letterSpacing: "0.1rem",
                fontSize: "15px",
              }}
            >
              Email
            </p>
            <input
              style={{ width: "240px", borderRadius: "0px" }}
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <p
              style={{
                fontFamily: "sans-serif",
                fontWeight: "300px",
                letterSpacing: "0.1rem",
                fontSize: "15px",
              }}
            >
              Password
            </p>
            <input
              style={{ width: "240px", borderRadius: "0px" }}
              placeholder="Password"
              type="password"
              value="6788790"
            />
          </Form.Field>
          <Form.Field style={{ marginTop: "30px" }}>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Link to="/Delivery">
            {" "}
            <Button
              type="submit"
              style={{
                backgroundColor: "#E72744",
                color: "white",
                width: "240px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "400px",
                  letterSpacing: "0.2rem",
                }}
              >
                CREATE AN ACCOUNT
              </div>
            </Button>
          </Link>
        </Form>
      </div>
    );
  }
}

export default Login;
