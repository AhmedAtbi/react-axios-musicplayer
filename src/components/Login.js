import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <style></style>

      <div class="wrapper fadeInDown">
        <div id="formContent">
          <form onSubmit={handleLogin}>
            <br />
            <input
              class="fadeIn second"
              name="email"
              type="email"
              placeholder="Email"
            />
            <br />
            <br />
            <input
              id="password"
              class="fadeIn third"
              name="password"
              type="password"
              placeholder="Password"
            />
            <br />
            <br />
            <input type="submit" class="fadeIn fourth" value="Log In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
