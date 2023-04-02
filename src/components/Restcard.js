import { CDN_LINK } from "../utils/constants";

const Restcard = (props) => {
    const { restdata } = props;
    // console.log(restdata)
    const { name, cuisines, costForTwoString, avgRating, deliveryTime,cloudinaryImageId } = restdata?.data.data
    return (
      <div className="card_cont">
        <div className="card">
          <img className="card_img"
            alt="res-img" src={ CDN_LINK+cloudinaryImageId} />
          <div className="card_info">
            <h2>{name}</h2>
            <h5 className="h4">{cuisines.join(',')}</h5>
            <h5>{costForTwoString}</h5>
            <p> Rating:{avgRating}| DeliveryTime:{deliveryTime}min</p>
  
          </div>
        </div>
      </div>
  
  
    )
  }

  export default Restcard;