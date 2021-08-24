import React  from 'react';
import {Link} from 'react-router-dom';
import Auth from '../components/Auth';

const header = () => {
    return (
      
            <header className="header">
                <Link to="/"><h1 className="title">MERN auth app</h1></Link>
                <Auth />
            </header>
        
    )
}

export default header;
