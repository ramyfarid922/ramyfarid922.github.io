import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class BlogPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 blog-posts-list">
            <div className="card mb-4">
              <img
                className="card-img-top"
                src={process.env.PUBLIC_URL + "/img/zsh-term.jpg"}
              />
              <div className="card-body">
                <h4 className="card-title">
                  Why I decided to use zsh terminal
                </h4>
                <small>
                  Posted on January 1, 2017 by &nbsp;
                  <NavLink to="/home">Ramy</NavLink>
                </small>

                <p className="card-text">
                  Since I started using linux and until now I, like anyone who
                  migrated to linux from windows, have been using the default
                  Ubuntu terminal which is the bash terminal. It looked good and
                  was smooth from a UX point of view and I had some preferences
                  in tweaking its look to give me that sense of control..until I
                  discovered zsh
                </p>
                <NavLink to="/readmore"> Read More →</NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card my-4">
              <h5 className="card-header">Search</h5>
              <div className="card-body">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">
                      Go!
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="card my-4">
              <h5 className="card-header">Categories</h5>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">HTML</a>
                      </li>
                      <li>
                        <a href="#">Freebies</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#">JavaScript</a>
                      </li>
                      <li>
                        <a href="#">CSS</a>
                      </li>
                      <li>
                        <a href="#">Tutorials</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPage;
