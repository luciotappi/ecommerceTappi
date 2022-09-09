//imports de reacts
import { useEffect, useState } from 'react';
import { useParams,useNavigate} from 'react-router-dom';

import ItemDetail from "../ItemDetail";

import {getItem, getItemFirebase, getProductsData} from '../../Data/Data';


//imports de materialize UI

import ErrorIcon from '@mui/icons-material/Error';
import HomeIcon from '@mui/icons-material/Home';
//imports de react-bootstrap

import Button from 'react-bootstrap/Button';

function ItemDetailContainer(props) {

  const[data,setData] = useState([])
  const[loading,setLoading]=useState(true)
  const {idItem} = useParams();
  
  const navigateFn = useNavigate();

  const goToHome = () => {
      navigateFn('/');
  }

  useEffect(()=>{
    setData([]);
    async function getD () {
      const data = await getItemFirebase(idItem);
      setData(data);
      setLoading(false);
  }

  getD ();
  },[idItem])

  useEffect(() => {
    console.log('Recibi itemID y es : ',idItem);
    return ()=> {
      console.log('Voy a cambiar itemId:',idItem);
    }
  },[idItem]);
  
  console.log(data.id);
  console.log(data.title);
  console.log("LOS DATOS DEL DETALLE SON: ", data);
  console.log(data.length);
  console.log(data[0]); 

  // La variable validItem controla si el id ingresado por ruta existe o no.
  let validItem = false;
  //Si el resultado de getItemFirebase(idItem) devuelve un array vacio entonces validItem se vuelve falso. 
  if (data.length != 0){
    validItem =true;
  }
  else {
    validItem=false;
  }

  return (
    
       loading ? 
        <div className="loading">
          <h2 style={{heightMin:'100vh' , color:'rgba(57,180,224,1)'}}>CARGANDO...</h2>
          <div class="loader-wheel"></div>
        </div>
        :
        <div>
         {validItem && <ItemDetail {...data}/>}
         {!validItem && 
         
          <div style={{height:'60vh',display:'flex', alignItems:'center', justifyContent:'center',flexDirection:'column'}}>
            <ErrorIcon color="info"></ErrorIcon>
            <h6 style= {{color:"white"}}>El producto con id {idItem} no existe</h6>
            <Button variant="primary"  onClick={() => goToHome()} ><HomeIcon/>Volver al Inicio</Button>
          </div>}
        </div>   
  );

}

export default ItemDetailContainer;