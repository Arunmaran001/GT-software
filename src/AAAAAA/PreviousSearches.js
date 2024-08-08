import React from 'react';
import "./Previous-search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Container } from 'react-bootstrap';


export default function PreviousSearches() {
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'] 

  return (
    <Container>
    <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
                { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </div>)) }
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search " />
                <button className='btn_search'>
                <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
        </Container>
  )
}
