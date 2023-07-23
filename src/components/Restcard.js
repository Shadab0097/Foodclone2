// import { useState } from "react";
import { CDN_LINK } from "../utils/constants";

const Restcard = (props) => {
  // const[color , setcolor]= useState(true)
    const { restdata } = props;
    console.log(restdata)
    const { name, cuisines, costForTwoString, avgRating, deliveryTime,cloudinaryImageId } = restdata?.data.data
    return (
      <div className="card_cont">
        <div className="card">
          <img className="card_img"
            alt="res-img" src={ CDN_LINK+cloudinaryImageId} />
          <div className="card_info">
            <h5 className="rest-name">{name}</h5>
            <p className="cuisine">{cuisines.join(',')}</p>
            {/* <h5></h5> */}
            <p className="card-detail"> <span className="rating-star">⭐{avgRating}</span> .<span className="rating">{deliveryTime}min</span>  . {costForTwoString}</p>

            <h4 className="view">QUICK VIEW</h4>
            <div className="quick-view">
          <h5 className="rest-name">{name}</h5>
          
          <p className="cuisine">{cuisines.join(',')}</p>
            
            
      
          </div>
  
          </div>
          
        </div>
      </div>
  
  
    )
  }

  export const withPromotedLabel = (Restcard)=>{
    return (props)=>{
      return(
        <div>
          <label className="promoted">Promoted</label>
          <Restcard {...props}/>
        </div>
      )
    }
  }

  export default Restcard;