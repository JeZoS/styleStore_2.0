import React from 'react';
import './menCard.css';
import {Link} from 'react-router-dom';

class WomenCard extends React.Component{
    render(){
        return<>
        <div className="container">
            <span className="men">Women's Collection</span>
            <br/>
            <br/>
            <div><Link to="/Womens/office" className="linkItem">Office</Link></div>
            <div><Link to="/Womens/Wedding"className="linkItem">Wedding</Link></div>
            <div><Link to="/Womens/Party" className="linkItem">Party</Link></div>
           <div> <Link to="/Womens/Casual" className="linkItem">Casuals</Link></div>
           <div> <Link to="/Womens/Travelling" className="linkItem">Travelling</Link></div>
        </div>
        </>
}
}
export default WomenCard;