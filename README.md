# Ecommerce basado en React.js <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>

:arrow_forward: Link de la pagina en Netlify! https://tappielectronics.netlify.app/ \
:arrow_forward: Link del video de presentación de la página!  https://www.youtube.com/watch?v=1VclB0tl--s


## Funcionalidades de la pagina

- La pagina es un ecommerce de producotos electronicos.\
- El ecommerce permite ver un listado de productos asi como el detalle de cada uno, su precio y stock disponible.
- Tiene implementado un carrito para guardar productos y sus cantidades para una posterior compra.
- Para efectuar la compra se solicita completar un formulario con doble verificacion de email para luego devolver un numero de orden.
- La pagina usa como base de datos Firestore de Firebase, alojando todos los productos, categorias y ordenes en ella.

## Que van a encontar en el repositorio?

- Se encuentran las carpetas default que genera react a través de npx create-reac-app App.
- Todos los componentes y funciones llamadas entre rutas.
- Todas las funciones y conectividad a la base de datos.


### Organizacion

- /src/componentes contiene todos los componentes creados, asi como sus funciones, imports y parametros relevantes. (Ej: Navbar, Footer,ItemListContainer,etc.).
- /src/context contiene las funciones del contexto que son comunes a varios componentes.
- /Data.js es el archivo donde se encuentra las funciones a las que llama la app a la hora de buscar informacion en la base de datos. Tambien se encuentran las funciones de busqueda y filtrado en el mismo archivo.
- /pages tiene las paginas a las que el Router apunta para cada caso.

### Navegacion

- `/` : Devuelve al home de la pagina y un listado de todos los productos disponibles.
- `/category/nombreCategoria` : Devuelve el listado de todos los productos de la categoria ingresada.
- `/id/idProducto` : Devuelve el detalle del produccto junto con el stock disponible y las cantidades a pedir (limitadas entre un valor inicial configurable en la base de datos y como maximo el stock del producto).
- `/cart` : Despliega el carrito con el listado de produdctos agregaos y un formulario de checkout para finalizar la compra

### Add-ons

- Utilizacion de `localStorage ` para permitir que el carrito sea persistente al cerrar la pagina.
- Verificacion de stock previo a realizar la compra.
- Busqueda de categorias dinamica en base a las existentes en la base de datos.



### Librerias

- react-bootstrap (https://react-bootstrap.github.io/).
- bootstrap (https://getbootstrap.com/).
- material UI Icons (https://mui.com/material-ui/material-icons/).
- firebase (https://firebase.google.com/).


### React

- UseState,UseEffect,useContext,useParams y CreateContex, de 'react' .\
- Route, Routes, UseNavige,BrowserRouter,Navlink de 'react-router-dom' .\


