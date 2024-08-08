import React from 'react';
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link ,useLocation} from 'react-router-dom';

function Sidebar({ links,close }) {
const  location = useLocation()
    return (
        <div className='sidebar'>
            {links?.map(link => (
                <Link
                    className='sidebar-link'
                    to={link?.path} 
                    key={link?.name}
                    aria-label={link?.name}
                >
                    <FontAwesomeIcon icon={link?.icon} />
                    <span>{link?.name}</span>
                </Link>
            ))}
        </div>
    );
}

export default Sidebar;


// className={`sidebar-link ${location.pathname === link.path ? 'active' : ''}`}