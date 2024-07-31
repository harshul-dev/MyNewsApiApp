import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:15,
    category: 'general'

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [], // Initialize as empty array
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.props.category} - Top Articles`;
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async (page = 1) => {
    const { pageSize } = this.props;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=26c48d8db75d438da758e4b68ff7428a&page=${page}&pageSize=${pageSize}`;
    
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await response.json();
      console.log(data);
      this.setState({ 
        articles: data.articles, 
        totalResults: data.totalResults, 
        page 
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  handlePreviousClick = () => {
    if (this.state.page > 1) {
      this.fetchArticles(this.state.page - 1);
    }
  }

  handleNextClick = () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.fetchArticles(this.state.page + 1);
    }
  }

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <br />
        <br />
        <h2 className="text-center my-3">My News - Top Headlines</h2>
        <hr className="horizontal" />
        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem 
                title={element.title ? element.title.slice(0, 88) : ""} 
                description={element.description ? element.description.slice(0, 45) : ""} 
                imageUrl={element.urlToImage} 
                newsUrl={element.url} 
                author={element.author} 
                date={element.publishedAt} 
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button 
            disabled={this.state.page <= 1} 
            type="button" 
            className="btn btn-danger" 
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button 
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} 
            type="button" 
            className="btn btn-danger" 
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

News.propTypes = {
  pageSize: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
};

export default News;
