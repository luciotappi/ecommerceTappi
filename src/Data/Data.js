import {db} from '../api/APIFirebase'
import { collection, getDocs,query,where,doc,getDoc,setDoc,increment,updateDoc } from 'firebase/firestore'

      export function searchCategoriesFirebase () {

        return new Promise( (resolve, reject) => {
            // creo la referencia a la coleccion que quiero traer
            const colRef = collection(db,'Categories');
          
              getDocs(colRef).then((snapshot) => {
                // console.log('>> snapshot.docs: ', snapshot.docs);
    
                const categoriasFB = snapshot.docs.map((rawDoc) => {
                    return {
                        id: rawDoc.id,
                        ...rawDoc.data()
                    }
    
                });
              
                //console.log('>> Categorias Firebase:', categoriasFB);
                resolve(categoriasFB);
    
            }, (error) => {
                reject('>> Error al intentar traer los docs: ', error);
            });
           
        });
      
    }         

      export function getProductsData (categoryId) {

        // TODO: Realizar un refactor utilizando Async/Await en lugar de Promise.then
    
        return new Promise( (resolve, reject) => {
            // creo la referencia a la coleccion que quiero traer
            const colRef = collection(db,'products4');
            if (categoryId ==null )
            {
              getDocs(colRef).then((snapshot) => {
                //console.log('>> snapshot.docs: ', snapshot.docs);
    
    
                const products4ConFormato = snapshot.docs.map((rawDoc) => {
                    return {
                        id: rawDoc.id,
                        ...rawDoc.data()
                    }
    
                });
           
           
    
                //console.log('>> products4:', products4ConFormato);
                resolve(products4ConFormato);
    
            }, (error) => {
                reject('>> Error al intentar traer los docs: ', error);
            });
          } else
          {
            
            
            // Genero query de la cateogia cuyo key coincida con el nombre ingreasdo en la ruta. 
            // El codigo se genera aqui para responder a  posibles ingresos tanto desde el Navbar como desde la ruta del navegador
            const qCategories = query(collection(db,'Categories'),where("key","==",categoryId));
            getDocs(qCategories)
            getDocs(qCategories).then((snapshot)=>{
              
              
              //console.log('>> snapshot.docs: ', snapshot.docs);
    
    
                const categoriesConFormato = snapshot.docs.map((rawDoc) => {
                    return {
                        id: rawDoc.id,
                        ...rawDoc.data()
                    }
    
                });
           
           ////

           //console.log("Query de categorias:", categoriesConFormato);
           //console.log(categoriesConFormato.length);


           //logica de control si no existe la categoria ingresada por ruta de navegador
           
           if (categoriesConFormato.length ==0) {

            //console.log("NO EXISTE LA CATEGORIA!");  
            const products4ConFormato = snapshot.docs.map((rawDoc) => {
              return {
                  id: rawDoc.id,
                  ...rawDoc.data()
              }

          });
            //console.log('>> products4:', products4ConFormato);
            resolve(products4ConFormato);


           }

           else {
                // Una vez encontado el id de la categoria, paso a buscar los produtos cuya categoria coincide con el key.

                const q = query(collection(db,'products4'),where("categoryName","==",categoriesConFormato[0].id));
                getDocs(q).then((snapshot)=>{
                  
                  //console.log('>> snapshot.docs: ', snapshot.docs);


                    const products4ConFormato = snapshot.docs.map((rawDoc) => {
                        return {
                            id: rawDoc.id,
                            ...rawDoc.data()
                        }

                    });

                    //console.log('>> products4:', products4ConFormato);
                    resolve(products4ConFormato);

                }, (error) => {
                    reject('>> Error al intentar traer los docs: ', error);

                })

                ////

                    // console.log('>> products4:', products4ConFormato);
                    // resolve(products4ConFormato);
              }


                }, (error) => {
                    reject('>> Error al intentar traer los docs: ', error);
                
                })
             
                            
                          }

           
        });
    }


  export async function getItemFirebase (itemId) {

    let response = [];
    // creo la referencia a la coleccion que quiero traer
   
  const itemRef = doc(db, 'products4', itemId);

    try {
      const docSnap = await getDoc(itemRef);
      if(docSnap.exists()) {

          //console.log(docSnap.data());
          response = docSnap.data();

      } else {
          //console.log("Document does not exist")
      }
  
  } catch(error) {
      console.log(error)
  }

  return response;
}

export async function createOrderInFirestore (order)  {


  let newOrderRef = [];
  newOrderRef =doc(collection(db,"orders"))
  await setDoc(newOrderRef,order)

return newOrderRef

}

export async function updateStock(item) {

  const itemRef = doc(db,"products4", item.idProd)
                await updateDoc(itemRef, {

                    stock: increment(-item.quantity) 
                })
}