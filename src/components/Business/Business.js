import React from 'react';
import './Business.css';
import App from '../App/app.js';



class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    {/* When there is no image of the displayed business, a default image (the one used by Yelp itself) is displayed.
                    The JS ternary operator is used to implement this conditional. */}
                    {this.props.business.imageSrc != "" ? (<img src={this.props.business.imageSrc} alt=''/> )
                    : (<img src = {'/images/business_large_square.png'} />) }
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.props.business.address}</p>
                        <p>{this.props.business.city}</p>
                        <p>{this.props.business.state} {this.props.business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.business.category}</h3>
                        <h3 className="rating">{this.props.business.rating} stars</h3>
                        <p>{this.props.business.reviewCount} reviews</p>
                    </div>
                </div>
                <div>
                    {/* Adding a button with link to the Google Maps page of the clicked business */}
                    <a href={'https://www.google.com/maps/place/' + this.props.business.address + '+' + this.props.business.city + '/'} target="_blank">
                        <button className="google-button">Open in Google Maps</button>
                    </a>
                </div>
            </div>
        )
    }
};


export default Business;
