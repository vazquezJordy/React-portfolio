import React from 'react';
import {Link} from 'react-router-dom'
export default function() {
        return (
            <div>
               <h1>Contact</h1>
               <div>
                   <Link to="/auth">Admin Log in</Link>
               </div>
            </div>
        );
}