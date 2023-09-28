/* eslint-disable react/prop-types */
import {
    ShoppingCartOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import {Button,Divider, Typography} from "@mui/material";
import { Delete } from "@mui/icons-material";

import "./Checkout.css"


const getTotalCartValue = (items = []) => {
    if (!items.length) return 0;
    const cost = items.reduce((accumulator, obj) => {
        return accumulator + (obj.price * obj.qty)
    }, 0)
    return cost;
};

// eslint-disable-next-line react/prop-types
const Checkout = ({ cartItems,handleDeleteCart }) => {
    return (
        <div className="checkout">
              <Typography
                    margin="3rem"
                    fontSize="1.5rem"
    
             >Shopping Cart</Typography>
             
            {
                 // eslint-disable-next-line react/prop-types
                 cartItems.length === 0 ? 
                 (
                    <div className="cart-item">
                 <Box className="cart empty">
                        <ShoppingCartOutlined className="empty-cart-icon" />
                        <Box color="#aaa" textAlign="center">
                            Cart is empty. Add more items to the cart to checkout.
                        </Box>
                 </Box>
            </div>   
                 ) : (
                    <Box className="cart">
                       
                        {cartItems.map((item) => (
                            <Box key={item.id} >
                                <Box display="flex" alignItems="center" padding="1rem" >
                                    <Box className="image-container">
                                        <img
                                            // Add product image
                                            src={item.imageURL}
                                            // Add product name as alt eext
                                            alt={item.name}
                                            width="100%"
                                            height="100%"
                                        />
                                    </Box>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="space-between"
                                        height="2rem"
                                        paddingX="1rem"
                                    >
                                        <div>{item.name}</div>
                                        <Box
                                            display="flex"
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <Box padding="0.5rem" fontWeight="700">
                                                ${item.price}
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box
                                        margin="1rem"
                                        height = "1.5rem"
                                        paddingX="1rem"
                                        sx = {{backgroundColor: "grey"}}
                                    >
                                        Qty : {item.qty}
                                    </Box>
    
                                    <Box >                                    
                                        <Button
                                            startIcon={<Delete />}
                                            sx = {{color : "black"}}
                                            onClick={()=>handleDeleteCart(item.id)}
                                        >
                                            DELETE
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                        <Divider />
                        <Box
                            display="flex"
                            justifyContent="flex-start"
                            alignItems="center"
                            gap = "10rem"
                        >
                            <Box padding="0.5rem">
                                Order Total :
                            </Box>
                            <Box padding="1.5rem" fontSize="1.5rem" fontWeight="700">
                                ${getTotalCartValue(cartItems)}
                            </Box>
                        </Box>
                    </Box>
                 )
            }
             
              

           
        </div>
    )
}
export default Checkout