// imprtos de react react 

import { useEffect, useState } from 'react';

import './App.css';
import NavBar from './components/NavBar/NavBar'; // para importar funciones 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; // para importar funciones 
import Footer from './components/Footer'; // para importar Footer
import ItemDetailContainer from './components/ItemDetailContainer'; // para importar funciones 

//paginas
import Home from './pages/Home';
import About from './pages/About';

//routes
import {Routes, Route} from 'react-router-dom'

import {searchCategories } from './Data/Data';

function App() {

  const[categories,setCategories] = useState([])
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    // getFetch
    searchCategories()
    .then((resp)=>setCategories(resp))
    .catch(err=>console.log(err))
    // .finally(()=>setLoading(false))
  },[categories])
  
  console.log("LAS CATEGORIAS SON : " + categories);
  console.log(categories.length);


  return (
    <div className="App">
    
      <NavBar categories={categories}/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<About/>}/>
         <Route path='/category/'element={<ItemListContainer/>}/> 
         <Route path='/category/:idCategory'element={<ItemListContainer/>}/>
         <Route path='/item/:idItem'element={<ItemDetailContainer/>}/>
      </Routes> 

      <Footer/> 
    
    </div>
  );
}

export default App;
