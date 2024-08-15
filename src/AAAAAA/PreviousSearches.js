import React from 'react';
import "./Previous-search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function PreviousSearches() {
  const navigate = useNavigate();
  const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'];

  const handleCartClick = () => {
    navigate('/cart'); 
  };

  return (
    <Container fluid>
      <div className="previous-searches section">
        <h2>Previous Searches</h2>
        <div className="previous-searches-container">
          {searches.map((search, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.1 + "s" }}
              className="search-item"
            >
              {search}
            </div>
          ))}
        </div>

        <div className="search-box">
  
  
      <input type="text" placeholder="Search "  />
      <button className='btn_search'>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      
      <div >
        
      <FontAwesomeIcon
        icon={faShoppingCart}
        size="2x"
       style={{paddingRight:"50px",alignItems:"center"}} 
        onClick={handleCartClick}
      />
      
    </div>
</div>
      </div>
      </Container>
  );
}
