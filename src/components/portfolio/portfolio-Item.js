import React from 'react';
import {Link} from 'react-router-dom'
export default function(props) {
     // Data taht we'll need:
        //  background image :thumb_image_url
        //  logo : logo_url
        //  description : description
        //  Id: id

        const {id, description,  thumb_image_url, logo_url} = props.item;
    return (
        <div className="portfolio-item-wrapepr"> 

            <img src={thumb_image_url} />
            <img src={logo_url}/>
            <div> {description} </div>
            
            <Link to = {`/portfolio/${id}`}>Link</Link>
        </div>
    );
}