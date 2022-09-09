
// react imports
import { useNavigate} from 'react-router-dom';
import { useContext} from 'react';

// context
import  { CartContext }  from '../../context/CartContext';

//material Ui imports
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


//stlye para el contador de items en carrito (badge)
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -10,
      top: 13,
      padding: '0 4px',
      backgroundColor:'rgba(57,180,224,1)',
      
    },
  }));

function CartWidget() {

    const {cartData,cartQuantity} = useContext(CartContext);

    //showCart maneja la aparacion del icono del carrito si hay o no items cargados en el
    let showCart= false;
    if (cartData.length==0){

        console.log(">>Cart Data VACIO<<");
        
        showCart = false;
    }

    else {
        console.log(">>Cart Data CON ALGO<<");
        showCart = true;
        
    }

    //hard-coding de showCart para que aparezca incluso si no hay items en el (de acuerdo a consiga tp final)
    showCart =true;


    const navigateFn = useNavigate();
    const goToCart = () => {

        navigateFn('/cart')

    }

    return(
        
    <>


        {showCart && 
        <IconButton aria-label="cart"  color="info"  onClick={() => {goToCart();}}>
            <StyledBadge badgeContent={cartQuantity} color="secondary" >
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>}
    </>

    );

}

export default CartWidget;