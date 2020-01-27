import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="row">
          <div className="footer-container">
            <h2>&copy; Dakota Heim</h2>
            <div className="columns">
              <ul className="social-links">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.url}
                        >
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="fa fa-chevron-up"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
