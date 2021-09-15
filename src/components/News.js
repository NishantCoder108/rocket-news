import React, { Component } from "react";
import Spinner from "./Spinner";
import NewsItems from "./NewsItems";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }

  async componentDidMount() {
    let apiURL = `https://newsapi.org/v2/everything?q=javascript&apiKey=57bcfbbb993443ccae3a070de35033df&pageSize=${this.props.pageSize}`;
    let data = await fetch(apiURL);
    let parseData = await data.json();

    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("Handle Prev Click");
    let apiURL = `https://newsapi.org/v2/everything?q=javascript&apiKey=57bcfbbb993443ccae3a070de35033df&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(apiURL);
    let parseData = await data.json();

    this.setState({
      articles: parseData.articles,

      page: this.state.page - 1,
    });
  };

  handleNextClick = async () => {
    console.log("Handle Next Click");

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      console.log("finisheed");
    } else {
      let apiURL = `https://newsapi.org/v2/everything?q=javascript&apiKey=57bcfbbb993443ccae3a070de35033df&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;

      let data = await fetch(apiURL);
      let parseData = await data.json();

      this.setState({
        articles: parseData.articles,

        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-5  ">
          <h3>RocketNews -Top Headlines</h3>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title}
                    desc={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark "
              disabled={this.state.page <= 1}
              onClick={this.handlePrevClick}
            >
              {" "}
              &larr; Previous{" "}
            </button>
            <button
              type="button"
              className="btn btn-dark  "
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>

          <Spinner />
        </div>
      </>
    );
  }
}
