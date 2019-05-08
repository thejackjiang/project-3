import React from "react";

import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function FavoriteResult(props) {
  return (
    
    <div className="fav-results">
          <ul className="list-group search-results">
     User's Favorited IALA Events:
     {/* {props.results.map(result => ( */}
    {/* key={result}  */}
    <li className="list-group-item">
          {/* <img alt="Dog" src={result} className="img-fluid" /> */}
        </li>
    
    </ul>

      </div>
 
  );
          }

export default FavoriteResult;
