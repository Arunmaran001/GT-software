import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Home from '../pages/Home';
import Recipes from '../pages/Recipes';
import BookTable from '../pages/BookTable';





function Homepage() {
  return (
    <div className='homepage'>


      <Container className='mt-5'>
        <Row>
          <Col>
            <div className='container main'>
              <Home />
              {/* <Recipes />
              <Settings /> */}
              {/* <BookTable/> */}
            </div>

          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Homepage;

