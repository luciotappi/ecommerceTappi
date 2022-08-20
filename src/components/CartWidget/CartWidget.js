// import pic from ".//Tappi-logo.png";

import { NavLink, useNavigate,Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import  { CartContext }  from '../../context/CartContext';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -10,
      top: 13,
    //   border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      backgroundColor:'rgba(57,180,224,1)',
      
    },
  }));

  
const CartWidgetStyle= {
    fontSize: "1.5rem", 
    // background: "linear-gradient(45deg, rgba(252,0,137,1) 25%, rgba(57,180,224,1) 82%)"
    color: "rgba(57,180,224,1)"
     
};

function CartWidget() {

    const {cartData,cartQuantity} = useContext(CartContext);
    
    let showCart= false;
    console.log(">>>ESTA ES LA DATA TRAIDA DE CONTEXT EN CART WID >: ",cartData);
    console.log(">>>ESTA ES LA CANTIDAD DE ITEMS EN CART QTY >: ",cartQuantity);
    if (cartData.length==0){

        console.log(">>Cart Data VACIO<<");
        // setCartQuantity(cartQuantity=0);
        showCart = false;
    }

    else {
        console.log(">>Cart Data CON ALGO<<");
        showCart = true;
        // setCartQuantity(cartQuantity=0);
    }

    const navigateFn = useNavigate();
    const goToCart = () => {
      
    
        navigateFn('/cart');

    }

    return(
        
    <>
    
    {/* <i class="bi bi-cart" style={CartWidgetStyle}>
    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
  </i> */}
  
  
        
      {/* </StyledBadge> */}


{/*       
      <IconButton aria-label="cart" color="primary">
      <Badge badgeContent={23} color="secondary">
      
        <ShoppingCartIcon />
        </Badge>
        </IconButton> */}
     
    
        {showCart && <IconButton aria-label="cart"  color="info"  onClick={() => {goToCart();}}>
            <StyledBadge badgeContent={cartQuantity} color="secondary" >
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>}
     
     
   
   
    </>
   

    );

}

export default CartWidget;