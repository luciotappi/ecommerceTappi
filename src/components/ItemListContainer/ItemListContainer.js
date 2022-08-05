import { useEffect, useState } from 'react';


import ItemList from "../ItemList";
import ItemDetailContainer from "../ItemDetailContainer";

import pic from ".//under-construction.jpg";
import pic2 from ".//under-construction2.jpg";

import getFetch from '../../Data/Data';

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

  const[data,setData] = useState([])
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    getFetch
    .then((resp)=>setData(resp))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))
  },[])
  
  console.log(data);
  
  console.log("LOS DATOS SON : " + {data});
  console.log(data.length);


  return (
    
       loading ? 
        <div className="loading">
        <h2 style={{height:'100vh' , color:'rgba(57,180,224,1)'}}>CARGANDO...</h2>
        {/* <img src={"../images/WMDx.gif"}></img> */}
        <div class="loader-wheel"></div>
        </div>
        :
        <div>
          <ItemList data={data}/>
          <ItemDetailContainer /> 
        </div>
      
    
   
    
  
  );

}

export default ItemListContainer;