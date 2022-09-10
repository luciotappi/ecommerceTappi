// imprtos de react 
import { useEffect, useState } from 'react';
import React from 'react';
//css imports
import './App.css';

//components
import NavBar from './components/NavBar/NavBar'; // para importar funciones 
import ItemListContainer from './components/List/ItemListContainer/ItemListContainer'; // para importar funciones 
import Footer from './components/Footer'; // para importar Footer
import ItemDetailContainer from './components/Detail/ItemDetailContainer'; // para importar funciones 
import Cart from './components/Cart';

//paginas
import Home from './pages/Home';
import About from './pages/About';

//routes
import {Routes, Route} from 'react-router-dom'
import {searchCategoriesFirebase } from './Data/Data';

//context
import CartCustomContext from './context/CartContext';

function App() {

  useEffect(() => {
  
 
  
  },[]);

  const[categories,setCategories] = useState([])
  const[loading,setLoading]=useState(true)

  
  useEffect(()=>{
    // getFetch
    searchCategoriesFirebase()
    .then((resp)=>setCategories(resp))
    .catch(err=>console.log(err))
  },[])

  // console.log("LAS CATEGORIAS SON : " + categories);
  // console.log(categories.length);

  return (

      <CartCustomContext>
      <div className="App">
      <NavBar categories={categories}/>
    
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/category/'element={<ItemListContainer/>}/> 
        <Route path='/category/:idCategory'element={<ItemListContainer/>}/>
        <Route path='/item/:idItem'element={<ItemDetailContainer/>}/>
        <Route path='/cart'element={<Cart/>}/>

      </Routes> 
      
      <Footer/> 
    
      </div>
      </CartCustomContext>
  );
}

export default App;
