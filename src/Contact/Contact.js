import React, { Component } from "react";
import "./Contact.css";

export class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div aria-label="contact header" className="row section-head">
          <div className="columns">
            <p arialabel="content header" className="lead">
              Thanks for looking! Contact me using any of the methods below.
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="columns">
            <div className="contact-info">
              <span>
                Email:{" "}
                <a
                  href="mailto: kotieheim@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kotieheim@gmail.com
                </a>
              </span>
              <span>
                Phone #: <p className="Phone_number">801-427-9988</p>
              </span>
              <span>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/dakotaheim/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dakotaheim
                </a>
              </span>
              <span>
                Github:{" "}
                <a
                  href="https://github.com/Kotieheim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kotieheim
                </a>
              </span>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
