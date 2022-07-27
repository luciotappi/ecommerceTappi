// import pic from ".//Tappi-logo.png";


const CartWidgetStyle= {
    fontSize: "1.5rem", 
    // background: "linear-gradient(45deg, rgba(252,0,137,1) 25%, rgba(57,180,224,1) 82%)"
    color: "rgba(57,180,224,1)"
     
};

function CartWidget() {

    

    return(
        
    
    <i class="bi bi-cart" style={CartWidgetStyle}></i>
        

    );

}

export default CartWidget;