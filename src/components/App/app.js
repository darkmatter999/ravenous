import React from 'react';
import logo from './logo.svg';
import './app.css';
import BusinessList from '../BusinessList/BusinessList';
import Business from '../Business/Business';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp.js';
import SearchBarHeader from '../SearchBarHeader/SearchBarHeader';

/*
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};


const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];
*/

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello</p>
      </header>
    </div>
  );
}
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    /* The following line is a <reference> to another component, in this case the SearchBar component. The states <term>, <location> and
    <sortBy> are updated via the parent <app> component through this reference and the <resetStates> method in the SearchBar component class.
    The reference <this.SB> is called below in App.render as second argument to the rendering of SearchBar and as part of App's handleDefault
    method in which first the <businesses> array is reset and therefore all results disappear from the screen once the title (ravenous) h1 is
    clicked, and then the via SearchBar referred-to <resetStates> method is invoked with the keyword <current>. Through this whöle effect,
    the user is directed to the default (blank) state upon click on the logo. <sortBy> is back in the default ('best_match') mode, the input
    fields are cleared and the displayed results are gone. For more information on references in React, check 
    https://www.freecodecamp.org/news/react-changing-state-of-child-component-from-parent-8ab547436271/
    */
    this.SB = React.createRef();
    this.searchYelp = this.searchYelp.bind(this);
    this.handleDefault = this.handleDefault.bind(this)
  }

  searchYelp(term, location, sortBy) {
    //console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({businesses: businesses})
    })
}

handleDefault() {
  // clear the displayed results from the previous search
  this.setState({
    businesses: [],
  });
  // invoke the referred-to method which resides in the SearchBar component, therefore change the states of the SearchBar components
  this.SB.current.resetStates();
  
}

  render() {  
    return (
      <div className="App">
        {/*In the following line, the prop 'onClick' is defined and given the value of above method 'handleDefault' */}
        <SearchBarHeader onClick={this.handleDefault} />
        <SearchBar ref={this.SB} searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
        
      </div>
    )
  }
}

export default App;
