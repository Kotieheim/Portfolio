import React, { Component } from "react";
import "./Portfolio.css";
import Downright from "../images/Downright.png";
import Powerup from "../images/Powerup.png";
import Quizapp from "../images/Quizapp.png";
import Forumish from "../images/Forum-ish.png";
import Momon from "../images/Momon.png";

export class Portfolio extends Component {
  render() {
    return (
      <section role="main" id="portfolio">
        <div className="row">
          <div className="columns collapsed">
            <h1>Projects</h1>

            <div className="portfolio-wrapper">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <div className="img-container">
                    <img
                      src={Forumish}
                      className="item-img"
                      alt="project screenshot"
                    />
                    <a
                      href="https://forum-ish.kotieheim.now.sh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="overlay">
                        <div className="text">Check it out!</div>
                      </div>
                    </a>
                  </div>

                  <div className="item-img-links">
                    <div>
                      <h2>Forum-ish</h2>
                      <p>
                        <a
                          href="https://forum-ish.kotieheim.now.sh/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Site
                        </a>{" "}
                        |{" "}
                        <a
                          href="https://github.com/Kotieheim/Forum-ish"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github
                        </a>
                      </p>
                    </div>
                    <p className="project-description">
                      Forum-ish is a Full Stack application built using React,
                      Node and Express. It's a RESTful API with a bright and
                      colorful comic book theme. It's a message board that uses
                      AJAX requests and allows for user registration and logins
                      using JWT authentication. This was made with my brother in
                      mind who is an english teachers with students who love
                      hearing him talk about their curriculum, music and random
                      facts.
                    </p>
                    <div className="Portfolio-techno-used">
                      <p>
                        Technologies used: HTML, CSS, JavaScript, React, Node.js
                        and Express.js
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-wrapper">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <div className="img-container">
                    <img
                      src={Momon}
                      className="item-img"
                      alt="project screenshot"
                    />
                    <a
                      href="https://forum-ish.kotieheim.now.sh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="overlay">
                        <div className="text">Check it out!</div>
                      </div>
                    </a>
                  </div>

                  <div className="item-img-links">
                    <div>
                      <h2>Mo Money</h2>
                      <p>
                        <a
                          href="https://hopeful-wiles-db2aa3.netlify.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Site
                        </a>{" "}
                        |{" "}
                        <a
                          href="https://github.com/Kotieheim/expenses-app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github
                        </a>
                      </p>
                    </div>
                    <p className="project-description">
                      Mo Money is an expenses app I made to become more familiar
                      with using React Hooks as well as working with Netlify. It
                      has a toggle button to switch between light and dark
                      theme. To use, simply add a name of an expense and how
                      much it was and it gets automatically calculated and
                      displayed.
                    </p>
                    <div className="Portfolio-techno-used">
                      <p>
                        Technologies used: HTML, CSS, JavaScript, React, React
                        Hooks, Emotion, styled-components and Netlify.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-wrapper">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <div className="img-container">
                    <img
                      src={Powerup}
                      className="item-img"
                      alt="project screenshot"
                    />
                    <a
                      href="https://power-up-app-bwyi8ooka.now.sh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="overlay">
                        <div className="text">Check it out!</div>
                      </div>
                    </a>
                  </div>

                  <div className="item-img-links">
                    <div>
                      <h2>Power Up</h2>
                      <p>
                        <a
                          href="https://power-up-app-bwyi8ooka.now.sh/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Site
                        </a>{" "}
                        |{" "}
                        <a
                          href="https://github.com/Kotieheim/power-up-app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github
                        </a>
                      </p>
                    </div>
                    <p className="project-description">
                      Power up is a Full-stack application using React.js and an
                      Express.js server. It serves as a weight lifting logger
                      that allows you to fill out workouts daily and then sort
                      by days of the week. This makes it easier to follow a
                      workout program and to keep yourself accountable to
                      performing the right workouts on each day of the week. The
                      homepage lists all workouts starting from the most recent
                      and then goes in a decending order. The detailed page of
                      every individual workout also lists a number telling you
                      the number of the logged workout allowing to keep track of
                      how many days you've worked out in all.
                    </p>
                    <div className="Portfolio-techno-used">
                      <p>
                        Technologies used: HTML, CSS, JavaScript, React.js,
                        Node.js and Express.js
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-wrapper">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <div className="img-container">
                    <img
                      src={Downright}
                      className="item-img"
                      alt="project screenshot"
                    />
                    <a
                      href="https://kotieheim.github.io/recipe-hack-capstone/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="overlay">
                        <div className="text">Check it out!</div>
                      </div>
                    </a>
                  </div>

                  <div className="item-img-links">
                    <div>
                      <h2>Down-Right-Tasty</h2>
                      <p>
                        <a
                          href="https://kotieheim.github.io/recipe-hack-capstone/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Site
                        </a>{" "}
                        |{" "}
                        <a
                          href="https://github.com/Kotieheim/recipe-hack-capstone"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github
                        </a>
                      </p>
                    </div>
                    <p className="project-description">
                      Down-Right-Tasty will accept a search query from the user
                      and return recipes from the Edamam.com API pertaining to
                      what the user searched. This will include a clickable
                      thumbnail and title that'll lead to a link of the recipe,
                      as well as a preview of the ingredients and a video of the
                      recipe, using YouTube's API, that is embedded and also
                      clickable to go to the location on YouTube.
                    </p>
                    <div className="Portfolio-techno-used">
                      <p>Technologies used: HTML, CSS, JavaScript and jQuery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-wrapper">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <div className="img-container">
                    <img
                      src={Quizapp}
                      className="item-img"
                      alt="project screenshot"
                    />
                    <a
                      href="https://kotieheim.github.io/Quiz-Assignment/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="overlay">
                        <div className="text">Check it out!</div>
                      </div>
                    </a>
                  </div>

                  <div className="item-img-links">
                    <div>
                      <h2>Weight Training Quiz</h2>
                      <p>
                        <a
                          href="https://kotieheim.github.io/Quiz-Assignment/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Site
                        </a>{" "}
                        |{" "}
                        <a
                          href="https://github.com/Kotieheim/Quiz-Assignment"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github
                        </a>
                      </p>
                    </div>
                    <p className="project-description">
                      A Quiz to test your knowledge on a few different styles of
                      weight training. People think "Weight training? all you do
                      is just pick up weights and then put em down right?" but
                      it's a lot more than that. This will test your knowledge
                      and maybe show you the depth in the subject.
                    </p>

                    <p>Technologies used: HTML, CSS and JavaScript</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
