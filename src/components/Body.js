import Restcard ,{withPromotedLabel}from "./Restcard";
// import restlist from "../utils/mockdata";
import { useCallback, useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { REST_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { useNavigate } from "react-router-dom";
// import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [inputList, setinputList] = useState("");
  const [Listofrest, setListofrest] = useState([]);
  const [filterList, setfilterList] = useState([])
  // const navigate = useNavigate()

const {loggedIn , setShowUser} = useContext(UserContext)

  const PromotedLabel = withPromotedLabel(Restcard)
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch(REST_LIST)
    // console.log(json)
    const json = await data.json()
    console.log(json)
    setListofrest(json?.data?.cards)
    setfilterList(json?.data?.cards)
  }
  // const {Listofrest , filterList} = useRestaurantList();
  const onlineStatus = useOnlineStatus()

  if (onlineStatus === false) {
    return (

      <h1> Looks like you lost your internet connection ☹️</h1>

    )
  }

  if (Listofrest.length === 0) {
    return <Shimmer />

  }

  function searchFilter() {
    if (inputList === "") {
      alert('Input value does not match restaurant name!');
    } else {
      let filterOut = Listofrest.filter((res) => res?.data?.data?.name.toLowerCase().includes(inputList.toLowerCase()))
      setfilterList(filterOut);
    }

  }


  return (
    <>
     <div className="secod_header">
      <img className="header_img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep" alt="head-img"/>
      <img className="header_img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"  alt="head-img"/>
      <img className="header_img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym"  alt="head-img"/>
      <img className="header_img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v"  alt="head-img"/>

    </div>
      <div className="body">
        <div className="restnum">
        <h3 className="total-res">16 restaurants</h3>
        
        <input type="text" className="search" placeholder="search restaurants" onChange={(e) => { setinputList(e.target.value) }} value={inputList} /> <button className="btn" onClick={searchFilter}>🚀</button> 
        <div>
          <input value={loggedIn} onChange={(e)=>setShowUser(e.target.value)}/>
        </div>
        </div>
       
     
        <div className="homeBtn">
          
          <button className="taskBtn" onClick={() => {
            let filterTop = Listofrest.filter((restop) => restop?.data?.data?.avgRating > 0)
            setfilterList(filterTop)
          }}>Relevance</button>

          <button className="taskBtn" onClick={() => {
            let filterTime = Listofrest.filter((restime) => restime?.data?.data?.deliveryTime <= 25)
            setfilterList(filterTime)
          }}>Delivery Time</button>

          <button className="taskBtn" onClick={() => {
            let filterTop = Listofrest.filter((restop) => restop?.data?.data?.avgRating >= 4)
            setfilterList(filterTop)
          }}> Rating </button>

          <button className="taskBtn" onClick={() => {
            let sorted = Listofrest.filter((price) => price?.data?.data?.costForTwo <= 30000)
            setfilterList(sorted)
          }}>Cost:low price</button>

          <button className="taskBtn" onClick={() => {
            let high = Listofrest.filter((highprice) => highprice?.data?.data?.costForTwo >= 40000)
            setfilterList(high)
          }}>Cost:high price</button>
        </div>

      </div>
      <div className="res_containor">
        {filterList.map((restaurant) => (
          <Link key={restaurant?.data?.data?.id} to={"/restmenu/" + restaurant?.data?.data?.id} className="link" >
            {restaurant?.data?.data?.promoted ? <PromotedLabel restdata={restaurant}/>: <Restcard restdata={restaurant} />}
            </Link>
        )
        )}
      </div>
    </>
  )
}



export default Body;