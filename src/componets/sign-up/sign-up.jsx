import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, createUserProfileDoc } from "../../firebase/firebase";

import "./sign-up.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      pass: "",
      confirmPass: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, pass, confirmPass } = this.state;

    if (pass !== confirmPass) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, pass);
      await createUserProfileDoc(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        pass: "",
        confirmPass: "",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, pass, confirmPass } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="pass"
            value={pass}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPass"
            value={confirmPass}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
