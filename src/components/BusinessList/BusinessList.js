import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    
    render() {
        if (this.props.businesses) {
        return (
            
            <div className="BusinessList">
                {this.props.businesses.map((business) => {
                    return <Business key={business.id} business = {business} />
                })}
            </div>
                )
        } else {
            return (
                <div className="location-unavailable">
                    {/* Add an alert that tells the user that her chosen location is not part [of Yelp] yet. This is invoked
                    whenever there is no 'this.props.businesses', ie if there is no JSON response (see Yelp.js).
                    'this.props.loc()' is courtesy of the 'displayLocation' method in the App component which itself refers
                    to 'displayLoc' in the SearchBar component to the existing reference. */}
                    <h1>Sorry, {this.props.loc().charAt(0).toUpperCase() + this.props.loc().substring(1)} hasn't been added yet. Please check out another location.</h1>
                </div>
                
            )
        }
    }
};


export default BusinessList;