import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div className="buttons">
              <a href="register.html" className="btn btn-primary">
                Sign Up
              </a>
              <a href="login.html" className="btn btn-light">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
