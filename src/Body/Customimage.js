
import React, { useState } from 'react';
import "./Body.css";

export default function Customimage({ imgSrc, pt }) {

    return (
        <div className='custom-image' style={{ paddingTop: pt, }}>
            <img src={imgSrc} alt="Gallery Image" />
        </div>
    );
}


// import React from 'react';

// export default function Customimage({ imgSrc, pt }) {
//     return (
//         <div className="custom-image" style={{ paddingTop: pt }}>
//             <img src={imgSrc} alt="Gallery Image" className="img-fluid" />
//         </div>
//     );
// }

