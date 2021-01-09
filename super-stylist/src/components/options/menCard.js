import React from 'react';
import {Link}from 'react-router-dom';
import './menCard.css';

class MenCard extends React.Component{
    render(){
        return<>
        <div className="container">
            <span className="men">Men's Collection</span>
            <br/>
            <br/>
            <div><Link to="/Mens/office" className="linkItem">Office</Link></div>
            <div><Link to="/Mens/Wedding"className="linkItem">Wedding</Link></div>
            <div><Link to="/Mens/Party" className="linkItem">Party</Link></div>
           <div> <Link to="/Mens/Casual" className="linkItem">Casuals</Link></div>
           <div> <Link to="/Mens/Travelling" className="linkItem">Travelling</Link></div>
        </div>
        </>
    }
}

export default MenCard;