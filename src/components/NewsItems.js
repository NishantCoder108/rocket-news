import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Aa4s1i64jTb8aa0JEq5TlQHaDP%26pid%3DApi&f=1"
                : imageUrl
            }
            className="card-img-top"
            alt="thi is source for that"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-dark sm-btn"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
