import { useEffect, useState } from 'react'

import axios from "axios"
import Header from "./components/Header"
import { BrowserRouter as Router } from "react-router-dom"
import RouterComponent from "./Routes/RouterComponent"
import './App.css'




function App() {

  const [productDetails, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [filterProduct, setFilteredProducts] = useState(productDetails);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    gender: [],
    color: [],
    type: [],
    price :[]
  })

  const fetchProducts = async () => {
    try {
      let response = await axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
      //console.log(response.data);
      setProducts(response.data)
      return response.data;
    } catch (e) {
      console.log(e);

    }
  }
  const handleAddProduct = (product) => {
    const itemExists = cartItems.find((item) => item.id === product.id);
    //If the item exists in the cart then check whether added quantity is less than the available quantity
    //if yes then increase the quantity by 1
    //if the added quantity becomes equal to the provided quantity show error
    if (itemExists) {
      if (itemExists.qty !== product.quantity) {
        setCartItems(cartItems.map((item) => item.id === product.id ?
          { ...itemExists, qty: itemExists.qty + 1 } : item)
        );
      } else {
        alert("Product out of stock")

      }

    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }

  }

  const handleRemoveProduct = (product) => {
    const itemExists = cartItems.find((item) => item.id === product.id);
    if (itemExists.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ?
            { ...itemExists, qty: itemExists.qty - 1 } : item

        )
      )
    }
  }

  const handleDeleteCart = (productID) => {
    setCartItems(cartItems.filter((item) => item.id !== productID))
  }


  const handleSearchChange = async (e) => {

    try {
      setSearch(e.target.value);
      if (e.target.value === "") {
        let response = await axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
        setFilteredProducts(response.data)
      } else {
        setFilteredProducts(productDetails.filter((data) => {
          if (data.name.toLowerCase().includes(e.target.value.toLowerCase())) {
            return { ...data }
          }
        }))
        //console.log("filteredProducts from search",filterProduct);
      }
    }
    catch (e) {
      console.log(e.response)
      if (e.response.status === 404) {
        setProducts([])
      } else {
        console.log("something went wrong")
      }
    }

  }


  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => (
      {
        ...prevFilters,
        [key]: prevFilters[key].includes(value)
          ? prevFilters[key].filter((item) => item !== value)
          : [...prevFilters[key], value]
      }
    )      
    )
    console.log("filters", filters)
  }

  function filterProducts() {
    const filteredProducts = productDetails.filter((product) => {
       const genderFilter =
        filters.gender.length === 0 ||
        filters.gender.includes(product.gender);
      const colorFilter =
        filters.color.length === 0 || filters.color.includes(product.color);
      const typeFilter =
        filters.type.length === 0 || filters.type.includes(product.type)
      const priceFilter = handlePriceRangeFilter(product);
      return genderFilter && colorFilter && typeFilter && priceFilter;

    })
    setFilteredProducts(filteredProducts);
    //console.log("filteredProducts",filterProduct);
  }


  const handlePriceRangeFilter = (product) => {
      if (filters.price.indexOf("0-Rs250") !== -1) {
        return product.price <= 250;
      }
      if (filters.price.indexOf("250-450")) {
        return (product.price >= 251 && product.price <= 450);
      }
      if (filters.price.indexOf("450+") !== -1) {
        return product.price >= 451;
      }
    
    // console.log("pricefilter",priceFilter)
    // setFilteredProducts(tempProducts)
   
  }

 





  useEffect(() => {
    fetchProducts();

  }, [])

  useEffect(() => {

    filterProducts();
   
  }, [filters])


  return (
    <Router>
      <Header cartItems={cartItems} />
      <RouterComponent
        productDetails={productDetails}
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleDeleteCart={handleDeleteCart}
        handleSearchChange={handleSearchChange}
        search={search}
        handleFilterChange={handleFilterChange}
        filters={filters}
        filterProduct={filterProduct}
       
      />
    </Router>
  )
}

export default App
