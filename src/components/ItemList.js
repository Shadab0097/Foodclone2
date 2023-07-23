import { CDN_LINK } from "../utils/constants";

const ItemList = ({ items }) => {
    return (
        <>
            <div>

                {items.map((item) => {
                                return(
                    <div key={item?.card?.info?.id} className="description-list">

                        <div className="menuPrice">
                            <span className="menu-name"> {item?.card?.info?.name}</span>
                            <span className="menu-cost"> ₹{item?.card?.info?.price / 100}</span>
                            <p className="description">{item?.card?.info?.description}</p>
                        </div>
                        
                        <div className="menuListImg"> 
                        {<img className="menuImg" src={CDN_LINK + item?.card?.info?.imageId} />} 
                        <button className="add-btn">Add<span className="plus-btn">➕</span></button>
                        </div> 

                    </div>
                    
                    )
                }

                )}
            </div>
        </>
    )
}

export default ItemList;