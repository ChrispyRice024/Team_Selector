import React from 'react';
import {Link} from 'react-router-dom'


export default function NavBar () {

        return(
            <div id='navBar'>
                <div className='navUnit'><h3><Link to='/'>Home</Link></h3></div>

                <div className='navUnit'><h3><Link to='/teams'>My Team</Link></h3></div>

                <div className='navUnit'><h3><Link to='/query'> Create New Team Member</Link></h3></div>

                <div className='navUnit'><h3><Link to='/about'>About</Link></h3></div>
                
                <div className='navUnit'><h3><Link to='/contact'>Contact</Link></h3></div>
            </div>
        )
}
    
