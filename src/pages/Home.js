import ItemListContainer from '../components/List/ItemListContainer/ItemListContainer'; // para importar funciones 
import HomeCarousel from '../components/HomeCarousel';

//css files

import './home.css';


export default function Home()
{
    return(
        <>
        
        
        {/* <div className="homeContainer">
            <HomeCarousel/>
        </div>
         */}
        <ItemListContainer greetings={'Pagina en construcción... Lamentamos las molestias! :('}/> 
        </>
    );
}