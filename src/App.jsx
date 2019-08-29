import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './Components/Search'
import Slide from './Components/Slide';

class App extends React.Component {

  state = {
    loading: true,
    articleTitles: [],
    searchedTitles: [],
  };
  /**
   * Loads articles on page startup
   */
  componentWillMount() {
    this.getArticles();
  }
  /**
   * requests article title url and image from api on search
   */
  searchArticles = async (e) => {
    e.preventDefault();
    const word = e.target.elements.word.value;
    if (word) { //if user entered word into search bar
      const url = `https://newsapi.org/v2/everything?q=${word}
      &apiKey=23e99b30a85a48e1bdcb385cca4a66b4`
      const API_CALL = await fetch(url);
      const data = await API_CALL.json();
      const articlesArray = [];
      for (let i = 0; i < data.articles.length; i++) {
        articlesArray.push({
          title: data.articles[i].title,
          url: data.articles[i].url,
          urlToImage: data.articles[i].urlToImage,
        });
      }
      this.setState({
        searchedTitles: articlesArray,
      });
      console.log(this.state.searchedTitles);
    }
  }
  /**
   * requests top articles from api
   */
  getArticles = async () => {
    const url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=23e99b30a85a48e1bdcb385cca4a66b4';
    const API_CALL = await fetch(url);
    const data = await API_CALL.json();
    console.log(data);
    const articlesArray = [];
    for (let i = 0; i < data.articles.length; i++){
      articlesArray.push({
        title: data.articles[i].title,
        url: data.articles[i].url,
        urlToImage: data.articles[i].urlToImage,
      });
    }
    this.setState({
      articleTitles: articlesArray,
    });
  }
  /**
   * Main app render
   */
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={() => (<Slide getArticles={this.getArticles} articleTitles={this.state.articleTitles} />)} />
          <Route path='/search' component={() => (
            <div>
              <Search searchArticles={this.searchArticles} />
              <h4 className="search-results">{this.state.searchedTitles.map((listValue, index) => {
                return <div className="search-result-titles" key={index}>{listValue.title} <a href={listValue.url}>-Link</a></div>
              })}</h4>
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
