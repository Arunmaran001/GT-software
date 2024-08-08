import React, { useEffect } from 'react';
import "./Body.css";
import { Button } from 'react-bootstrap';
import pc1 from "../images/image1.jpg"
import pc2 from "../images/image2.jpg"
import pc3 from "../images/image3.jpg"
import pc4 from "../images/image4.jpg"
import pc5 from "../images/image5.jpg"
import pc6 from "../images/image6.jpg"
import pc7 from "../images/image7.jpg"
import pc8 from "../images/image8.jpg"
import pc9 from "../images/image9.jpg"
import Customimage from './Customimage';
function BodySection() {
    const images = [ 
        pc1,
        pc2,
        pc3,
        pc4,
        pc5,
        pc6,
        pc7,
        pc8,
        pc9,
        
    ];

    useEffect(() => {
        console.log("images", images);
    }, [images]);

    return (
        <div className='section body'>
            <div className='col typography'>
                <h1 className='title'>What Are We About</h1>
                <p className='info'>
                    A restaurant is a welcoming space where culinary creativity meets warm hospitality, offering a diverse menu to satisfy every palate. Whether for a casual meal or a special occasion, we strive to create memorable dining experiences in a cozy, inviting atmosphere.
                </p>
                <button className='btn' style={{backgroundColor:"#ff0056",color:"white"}}>Explore Now</button>
            </div>
            <div className='col gallery'>
                {images.map((src, index) => (

                    <div key={index} className='gallery-item'>
                       <Customimage imgSrc={src} pt={"80%"} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BodySection;




// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import Customimage from './Customimage';

// function BodySection() {
//     const images = [
//         "/images/image1.jpg",
//         "/images/image2.jpg",
//         "/images/image3.jpg",
//         "/images/image4.jpg",
//         "/images/image5.jpg",
//         "/images/image6.jpg",
//         "/images/image7.jpg",
//         "/images/image8.jpg",
//         "/images/image9.jpg"
//     ];

//     return (
//         <Container fluid className="section body py-5">
//             <Row className="align-items-center">
//                 <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
//                     <h1 className="title mb-3">What Are We About</h1>
//                     <p className="info mb-4">A restaurant is a place where people go to enjoy a meal outside of their home. It offers a variety of food and beverages, prepared and served by staff. Restaurants often provide a social setting and a chance for people to relax and enjoy their dining experience.</p>
//                     <Button variant="primary" className="btn">Explore Now</Button>
//                 </Col>
//                 <Col md={8} className="gallery">
//                     <Row>
//                         {images.map((src, index) => (
//                             <Col xs={12} sm={6} md={4} key={index} className="mb-4">
//                                 <Customimage imgSrc={src} pt={"85%"} />
//                             </Col>
//                         ))}
//                     </Row>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default BodySection;


