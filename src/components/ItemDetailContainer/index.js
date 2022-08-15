//imports de reacts
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

import ItemDetail from "../ItemDetail";

import {getItem} from '../../Data/Data';

function ItemDetailContainer(props) {

  const[data,setData] = useState([])
  const[loading,setLoading]=useState(true)
  const {idItem} = useParams();

  useEffect(()=>{

     getItem(idItem)
    // getItem(0)
    .then((resp)=>setData(resp))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))
  },[])

  useEffect(() => {
    console.log('Recibi itemID y es : ',idItem);
    return ()=> {
      console.log('Voy a cambiar itemId:',idItem);
    }
  },[idItem]);
  
  console.log(data);
  console.log(data.id);
  console.log(data.title);
  console.log("LOS DATOS DEL DETALLE SON: "+ data);
  console.log(data.length);
  console.log(data[0]); 


  return (
    
       loading ? 
        <div className="loading">
          {/* <h2 style={{heigh:'100vh' , color:'rgba(57,180,224,1)'}}>CARGANDO...</h2> */}
        <h2 style={{heightMin:'100vh' , color:'rgba(57,180,224,1)'}}>CARGANDO...</h2>
        {/* <img src={"../images/WMDx.gif"}></img> */}
        <div class="loader-wheel"></div>
        </div>
        :
        <div>
          <ItemDetail {...data}/>

        </div>   
  
  );

}

export default ItemDetailContainer;