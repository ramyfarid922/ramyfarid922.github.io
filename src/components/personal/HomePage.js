import React, { Component } from "react";
import BannerSB from "./BannerSB";

class HomePage extends Component {
  render() {
    return (
      <div>
        <BannerSB />
        <br />
        <div className="container homepage-container">
          <div className="row">
            <div className="col-md-8 mb-5">
              <h2>What I do</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                deserunt neque tempore recusandae animi soluta quasi? Asperiores
                rem dolore eaque vel, porro, soluta unde debitis aliquam
                laboriosam. Repellat explicabo, maiores!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                optio neque consectetur consequatur magni in nisi, natus beatae
                quidem quam odit commodi ducimus totam eum, alias, adipisci
                nesciunt voluptate. Voluptatum.
              </p>
              <a className="btn btn-dark btn-lg" href="#">
                Know more! &raquo;
              </a>
            </div>
            <div className="col-md-4 mb-5">
              <h2>Contact Me</h2>
              <hr />
              <address>
                <strong>Ramy Farid</strong>
                <br />
                Cairo, Egypt
                <br />
                <br />
              </address>
              <address>
                <br />

                <a href="mailto:#">name@example.com</a>
              </address>
            </div>
          </div>
          {/* <div class="row">
            <div class="col-md-4 mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="http://placehold.it/300x200"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="http://placehold.it/300x200"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque sequi doloribus totam ut
                    praesentium aut.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="http://placehold.it/300x200"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default HomePage;
