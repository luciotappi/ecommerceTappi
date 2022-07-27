import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'; // para importar funciones 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; // para importar funciones 


function App() {
  return (
    <div className="App">
      <NavBar/>
     
      <ItemListContainer greetings={'Pagina en construcción... Lamentamos las molestias! :('}/> 

    </div>
  );
}

export default App;
