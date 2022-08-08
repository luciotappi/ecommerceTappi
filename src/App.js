import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'; // para importar funciones 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; // para importar funciones 

import ItemCount from './components/ItemCount'; // no es necesario en este caso que el path sea ../ItemCount/ItemCount ya que el archivo .js se llama index.js
import CardProduct from './components/CardProduct'; // para importar funciones 
import Footer from './components/Footer'; // para importar Footer
import ItemDetailContainer from './components/ItemDetailContainer'; // para importar funciones 

//paginas
import Home from './pages/Home';
import About from './pages/About';

//routes
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
  
      <ItemListContainer greetings={'Pagina en construcción... Lamentamos las molestias! :('}/> 
      <ItemDetailContainer /> 
      <Footer/>


      {/* <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<About/>}/>
        {/* <Route path='/microcontroladores' element={<ItemListContainer/>}/> */}
        {/* <Route path='/category/'element={<ItemListContainer/>}/> */}
        {/* <Route path='/category/:idCategory'element={<ItemListContainer/>}/> */}
        {/* <Route path='/item/:idItem'element={<ItemDetailContainer/>}/>
      </Routes> 
      <Footer/>  */}
     

    </div>
  );
}

export default App;
