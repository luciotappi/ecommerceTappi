import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

import ItemList from "../ItemList";

import {getItemByCategory,getProductsData} from '../../Data/Data';

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
  // var listTitle = "";
  // console.log("CATEGORY NAME: ");
  // console.log({idCategory});
  // if (idCategory != null){

  //   // listTitle = "LISTADO DE CATEGORIA : " + data[0].categoryName;
  //   listTitle =data[0].categoryName;
    
  // } else
  // {
  //   listTitle = "NUESTROS PRODUCTOS:"
  // }

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
        <div className="d-flex align-items-center" style={{
         
          width:'75%',
          margin:'auto'
        }}>
          {/* <h1>LISTADO DE CATEGORIA : {data[0].categoryName}</h1> */}
          {/* <h1>LISTADO DE CATEGORIA : {listTitle}</h1> */}
          {validData && <ItemList data={data}/>}
          {!validData &&
          <h2>La categoria ingresada no existe!</h2>}
        </div>
      
    
   
    
  
  );

}

export default ItemListContainer;