import React from 'react';
/**
 * Search component on second page
 */
class Search extends React.Component {
  render() {
    return (
      <div className="search-wrap">
        <h1 className="search-header">Find Any Story, Topic, Article</h1>
        <form onSubmit={this.props.searchArticles}>
          <div className="group">
            <input type="text" id="word" />
            <label>Search</label>
          </div>
        </form>
      </div>
    );
  }
}


export default Search;
