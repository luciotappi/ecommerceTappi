
import ItemList from "../ItemList";
import ItemDetailContainer from "../ItemDetailContainer";

import pic from ".//under-construction.jpg";
import pic2 from ".//under-construction2.jpg";



const estilos = {

  fontWeight :'bolder',
  // alignItems: 'center',
  fontSize:'200%',
  fontFamily:'Montserrat',
  // color:'rgb(252,3,140)',
  color:'#fff',
  backgroundColor:'rgb(53,60,66)',
  backgroundImage: `url(${pic2})`,
  minHeight:'100%',
  height:'100vh',
  backgroundSize:'cover'
};


const Image = () => {

  return (

    <img src={pic} widht='3000'></img>
  )
}

function ItemListContainer(props) {


  return (
    <div>
      <ItemList></ItemList>
     <ItemDetailContainer /> 
    </div>
    
   
    
  
  );

}

export default ItemListContainer;