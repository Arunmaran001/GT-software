import React, { useState } from 'react';
import "./Navebar.css";
import { Link ,useLocation} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faTable,  } from "@fortawesome/free-solid-svg-icons";
import Sidebar from './Sidebar';

function Navebar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const  location = useLocation()
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "BookTable",
            path: "/BookTable",
            icon: faTable
        }
    ];

    return (
        <Container fluid>
            <Row className="align-items-center justify-content-between navbar">
                <Col xs="auto">
                    <a href="#!" className="logo">F<span>oo</span>dishHub</a>
                </Col>
                <Col xs="auto" className="d-none d-md-flex nav-links">
                    {links.map(link => (
                        <Link   to={link.path} key={link.name}>
                            <FontAwesomeIcon icon={link.icon} /> {link.name}
                        </Link>
                    ))}
                </Col>
                <Col xs="auto">
                    <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? 'sidebar-btn active' : "sidebar-btn"}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </div>
                </Col>
            </Row>
            {showSidebar && <Sidebar links={links} />}
        </Container>
    );
}

export default Navebar;


