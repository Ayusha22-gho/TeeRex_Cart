/* eslint-disable react/prop-types */
import SearchProduct  from "./Search"
import "./Products.css"
import Filter from "./Filter"
const Products = ({ productDetails ,
    handleAddProduct, 
    cartItems,
     handleRemoveProduct,
     handleSearchChange,
     search,
     handleFilterChange,
     filters,
     filterProduct,
     priceFiltered,
     priceFilter
    }) => {

    const isItemInCart = (items, productId) => {
        return Boolean(items.find((item) => item.id === productId))
    }

    return (
        <>
        
        <div className="searchContainer">
        <SearchProduct
            search = {search}
            handleSearchChange={handleSearchChange}
           />
    </div>
        <div className="productsPage">
            <div className="filterContainer">
                <Filter 
                filters = {filters}
                handleFilterChange = {handleFilterChange}
                priceFiltered={priceFiltered}
                priceFilter = {priceFilter}
                />
            </div>
            <div className="productContainer">
                <div className="productList">
                    {filterProduct.length === 0 ? (
                        productDetails.map((product) => (
                            <div className="box" key={product.id}>
                                <div className="imageContainer">
                                    <span>{product.name}</span>
                                    <img src={product.imageURL} alt={product.name} />
                                </div>
    
    
                                <div className="productContent">
                                    <div className="price">Rs. {product.price}</div>
                                    {isItemInCart(cartItems,product.id) ? 
                                       (
                                        <div className="item-quantity">
                                            <button
                                            onClick={()=> handleAddProduct(product)}
                                            >+</button>
                                            <button
                                            onClick={()=>handleRemoveProduct(product)}
                                            >-</button>
                                        </div>
                                    ):(
                                        <div className="button">
                                        <button
                                          onClick = {() => handleAddProduct(product)}
                                        >
                                        Add to Cart</button>
    
                                    </div>
                                    )}
                                   
                                </div>
                            </div>
                        ))
                    ):
                    (
                        filterProduct.map((product) => (
                            <div className="box" key={product.id}>
                                <div className="imageContainer">
                                    <span>{product.name}</span>
                                    <img src={product.imageURL} alt={product.name} />
                                </div>
    
    
                                <div className="productContent">
                                    <div className="price">Rs. {product.price}</div>
                                    {isItemInCart(cartItems,product.id) ? 
                                       (
                                        <div className="item-quantity">
                                            <button
                                            onClick={()=> handleAddProduct(product)}
                                            >+</button>
                                            <button
                                            onClick={()=>handleRemoveProduct(product)}
                                            >-</button>
                                        </div>
                                    ):(
                                        <div className="button">
                                        <button
                                          onClick = {() => handleAddProduct(product)}
                                        >
                                        Add to Cart</button>
    
                                    </div>
                                    )}
                                   
                                </div>
                            </div>
                        ))
                    )
                    
                    
                    }
                    
                </div>

            </div>
        </div>


        </>
    )
}

export default Products