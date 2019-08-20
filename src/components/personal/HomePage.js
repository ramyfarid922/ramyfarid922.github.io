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
            <div className="col-md-8 mb-5 what-ido-text">
              <h3>What I do</h3>
              <hr />
              <p>
              I am Ramy Farid, a full stack software developer and a part-time teaching assistant in computer engineering department in my university. I have a bachelor's degree in computer engineering. 


              </p>
              <p>
              I have expertise in the field working for more than two years professionally in developing full stack web applications and REST APIs for SaaS software startups and also reverse engineering and revamping old projects. Throughout my career I have faced many issues in all the most of the aspects of full stack web development that I am sure I can work my way to always find a solution

              </p>
              <a className="btn btn-dark btn-lg" href="#">
                Know more! &raquo;
              </a>
            </div>
            <div className="col-md-4 mb-5 contact-me-text">
              <h3>Contact Me</h3>
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

                <a href="mailto:#">ramyfarid922@gmail.com</a>
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
