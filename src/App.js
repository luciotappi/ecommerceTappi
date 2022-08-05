import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'; // para importar funciones 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; // para importar funciones 

import ItemCount from './components/ItemCount'; // no es necesario en este caso que el path sea ../ItemCount/ItemCount ya que el archivo .js se llama index.js
import CardProduct from './components/CardProduct'; // para importar funciones 
function App() {
  return (
    <div className="App">
      <NavBar/>
     
      <ItemListContainer greetings={'Pagina en construcción... Lamentamos las molestias! :('}/> 
      
      {/* <ItemCount stock= '5' initial ='1'/> */}
    </div>
  );
}

export default App;
