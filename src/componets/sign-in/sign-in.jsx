import React from "react";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-in.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.jsx";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
