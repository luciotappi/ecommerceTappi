// react imports

import { useEffect, useState } from 'react';
import { useParams,NavLink,Link} from 'react-router-dom';

//components imports 
import ItemList from "../ItemList";
import {getProductsData} from '../../Data/Data';

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
  
  console.log(data);
  
  console.log("LOS DATOS SON : " + data);
  console.log(data.length);

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
          <div class="loader-wheel"></div>
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

         {!validData &&
          <h2>La categoria ingresada no existe!</h2>}
       </div>
        </div>
  
  );

}

export default ItemListContainer;