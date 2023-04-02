import Restcard from "./Restcard";
import restlist from "../utils/mockdata";
import obj from "react";

const Body = () => {
    const [Listofrest, setListofrest]= obj.useState(restlist);
    return (
      <div className="body">
        {/* <div className="search">search</div> */}
        <div  className="Top-btn"><button className="btn" onClick={()=>{
            let filterOut = Listofrest.filter((res)=>res.data.data.avgRating >4)
            setListofrest(filterOut);

        }}>Top Rated Restaurants</button></div>
        <div className="res_containor">
          {Listofrest.map((restaurant) => (
            <Restcard restdata={restaurant} key={restaurant.data.data.id} />
          )
          )}
  
        </div>
      </div>
    )
  }

  export default Body;