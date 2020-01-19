import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.resetStates = this.resetStates.bind(this);
    this.displayLoc = this.displayLoc.bind(this);
    
    //added 'distance' as fourth sort option
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
      'Nearest': 'distance'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);

    event.preventDefault();
  }

  resetStates() {
    // reset all modified states back to their respective default modes
    this.setState(
      {
      term: '',
      location: '',
      sortBy: 'best_match'
      })
    // clear the input fields from all text typed as part of the previous search
    document.getElementById('search-fields').reset()
  }

  displayLoc() {
    return this.state.location;
  }

  //implements a method that listens for a press on the 'Enter' key and executes the 'handleSearch' method once pressed
  keyPress(e) {
    if (e.keyCode === 13) {
      //console.log(e.target.value);
      this.handleSearch(e)
    }
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
             </li>);
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <form id="search-fields">
            {/* add an HTML5-native datalist for the category input so that list choice and (optional) text input are combined */}
            <input list="business-choices" placeholder="Search Businesses" onChange={this.handleTermChange} onKeyDown={this.keyPress} />
            <datalist id="business-choices">
                <option value="Pizza" />
                <option value="Burger" />
                <option value="Chinese" />
                <option value="Mexican" />
                <option value="Vegetarian" />
            </datalist>
            <input placeholder="Where?" onChange={this.handleLocationChange} onKeyDown={this.keyPress} />
          </form>
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch}>Let's Go</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;