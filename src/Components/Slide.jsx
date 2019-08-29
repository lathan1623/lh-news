import React from 'react';
import Slider from 'react-slick';
/**
 * Sliding news component on main page
 */
class Slide extends React.Component {
  render() {
    return (
      <div>
        <h2>Top Stories:</h2>
        <Slider
          className="slider"
          arrows={false}
          autoplay
          autoplaySpeed={3000}
          infinite
          speed={500}
          slidesToShow={3}
          slidesToScroll={3}
        >
          {this.props.articleTitles.map((listValue, index) => (
            <div className="card" key={index}>
              {listValue.title}
              <img src={listValue.urlToImage} alt="" />
              <a href={listValue.url} className="card-link">Read More</a>
            </div>
          ))}
        </Slider>
        <div className="home-text">
          <p>
            Get all of your news from all of the best sources.
            We pull the most popular articles from different sources around the web,
            getting you the best stories without the hassle.
          </p>
        </div>
      </div>
    );
  }
}

export default Slide;
