import React from 'react';
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
           <div className="widgets__articleLeft"></div>

           <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
           </div>
        </div>
        
    )
  return ( <div className="widgets"> 
    <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
    </div>
        {newsArticle("Test Article", "Top news - 9098 readers")}
  </div>
  );
}

export default Widgets;
