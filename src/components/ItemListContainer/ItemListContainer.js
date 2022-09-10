// react imports

import { useEffect, useState } from 'react';
import { useParams,useNavigate} from 'react-router-dom';

//components imports 
import ItemList from "../ItemList";
import {getProductsData} from '../../Data/Data';

//imports de materialize UI

import ErrorIcon from '@mui/icons-material/Error';
import HomeIcon from '@mui/icons-material/Home';
//imports de react-bootstrap

import Button from 'react-bootstrap/Button';

function ItemListContainer(props) {

  const[data,setData] = useState([])
  const[loading,setLoading]=useState(true)
  const {idCategory} = useParams();


  useEffect(()=>{
    
    getProductsData(idCategory)
    .then((resp)=>setData(resp))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))

    // Vuelvo a dejar el loading en true para mostar el loading ante una nueva recarda o navegación

    return () => {
      setLoading(true);
    }
  },[idCategory])

  useEffect(()=>{
    // getFetch
  },[idCategory])
  
  const navigateFn = useNavigate();

  const goToHome = () => {
      navigateFn('/');
  }
  //console.log(data);
  
  //console.log("LOS DATOS SON : " + data);
  //console.log(data.length);

  //validData controla si la categoria ingresada por barra de busqueda de navegador existe.

  let validData=false;
  if (data.length==0)
  {
    validData= false;
  }
  else{
    validData=true;
  }
  return (
    
       loading ? 
        <div className="loading">
          <h2 style={{height:'100vh' , color:'rgba(57,180,224,1)'}}>CARGANDO...</h2>
          <div className="loader-wheel"></div>
        </div>
        :
        <div>
            <div className="d-flex align-text-bottom" style={{minHeight:'20vh',color:'white', width:'75%', margin:'auto',alignItems:'end'}}>

              <h6>Productos</h6>

            </div>

          <div className="d-flex align-items-center" style={{
          
            width:'75%',
            margin:'auto'
            }}>

            {validData &&
              < ItemList data={data}/>}
          </div>

          {!validData &&

              <div style={{height:'60vh',display:'flex', alignItems:'center', justifyContent:'center',flexDirection:'column'}}>
                <ErrorIcon color="info"></ErrorIcon>
                  <h6 style= {{color:"white"}}>La categoría {idCategory} no existe</h6>
                <Button variant="primary"  onClick={() => goToHome()} ><HomeIcon/>Volver al Inicio</Button>
               

              </div>
                }
        </div>
        
  
  );

}

export default ItemListContainer;