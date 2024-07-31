import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img 
            src={imageUrl || "https://media.istockphoto.com/id/871234518/photo/yellow-cartoon-robot-thinking-about-something.jpg?s=1024x1024&w=is&k=20&c=FJkKHGgsVBf6XBma5pFE_CJj8ZYRaJ2o9laZpBgVdvQ="} 
            className="card-img-top" 
            alt={title || "News image"} 
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 88) + "..." : "No title available"}</h5>
            <p className="card-text">{description ? description.slice(0, 45) + "..." : "No description available"}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author || "Unknown"} on {date ? new Date(date).toGMTString() : "No date available"}
              </small>
            </p>
            <a 
              rel="noreferrer" 
              href={newsUrl} 
              target="_blank" 
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
