/* eslint-disable react/prop-types */
import "./Filter.css"
const Filter = ({filters,handleFilterChange}) => {
return (
    <div className="menu">
        <div className="item">
            <div className="color">
            <h3>Color</h3>
                {[
                    "Black",
                    "Blue",
                    "Green",
                    "Pink"
                ].map((color) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="filters">
                        <input type="checkbox" name= {color} 
                        value = {color} 
                        checked = {filters.color.includes(color)}
                        onChange = {() => handleFilterChange("color",color)}
                        />
                        <label key = {color}>{color}</label>
                    </div>
                ))
                }
            </div>
            <div className="color">
            <h3>Gender</h3>
                {
                   ["Men", "Women"].map((gender) => (
                     // eslint-disable-next-line react/jsx-key
                     <div className="filters" >
                    <input type="checkbox" name={gender} className="filterCheckBox" 
                    value = {gender} checked = { filters.gender.includes(gender)}
                    onChange = {() => handleFilterChange("gender",gender)}
                    />
                    <label key = {gender}>{gender}</label>
                </div>
                   )) 
                }
               
            </div>
            <div className="color">
            <h3>Price</h3>
                {
                    ["0-Rs250" ,"251-450","450+"].map((price)=> (
                        // eslint-disable-next-line react/jsx-key
                        <div className="filters"  >
                            <input type="checkbox" name={price}
                            value = {price}
                            checked = {filters.price.includes(price)}
                            onChange = {()=> {
                              handleFilterChange("price",price)
                           // priceFiltered(e,price,price)
                            }
                        }
                            
                            />
                            <label htmlFor={price}>{price}</label>
                        </div>
                    ))
                }
            </div>
            <div className="color">
                <h3>Type</h3>
                {["Polo","Hoodie","Basic"].map((type)=> (
                     // eslint-disable-next-line react/jsx-key
                     <div className="filters" >
                    <input type="checkbox" name={type} 
                    
                    value = {type} checked = { filters.type.includes(type)}
                    onChange = {() => handleFilterChange("type",type)}
                    />
                    <label htmlFor={type}>{type}</label>
                </div>
                ))}
               
            </div>
        </div>

    </div>

)

}
export default Filter