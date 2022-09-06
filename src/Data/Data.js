import {db} from '../api/APIFirebase'
import { collection, getDocs,query,where,doc,getDoc,setDoc,increment,updateDoc } from 'firebase/firestore'

// export const Categories =[

//   {
//     "categoryName":"Microcontroladores",
//     "categoryId":0
//   },

//   {
//     "categoryName":"Placas",
//     "categoryId":1
//   },
  
//   {
//     "categoryName":"Sensores",
//     "categoryId":2
//   }
 

// ]

      export function searchCategoriesFirebase () {

        
    
        return new Promise( (resolve, reject) => {
            // creo la referencia a la coleccion que quiero traer
            const colRef = collection(db,'Categories');
          
              getDocs(colRef).then((snapshot) => {
                console.log('>> snapshot.docs: ', snapshot.docs);
    
    
                const categoriasFB = snapshot.docs.map((rawDoc) => {
                    return {
                        id: rawDoc.id,
                        ...rawDoc.data()
                    }
    
                });
           
           
    
                console.log('>> Categorias Firebase:', categoriasFB);
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
                console.log('>> snapshot.docs: ', snapshot.docs);
    
    
                const products4ConFormato = snapshot.docs.map((rawDoc) => {
                    return {
                        id: rawDoc.id,
                        ...rawDoc.data()
                    }
    
                });
           
           
    
                console.log('>> products4:', products4ConFormato);
                resolve(products4ConFormato);
    
            }, (error) => {
                reject('>> Error al intentar traer los docs: ', error);
            });
          } else
          {
            const q = query(collection(db,'products4'),where("categoryName","==",categoryId));
            getDocs(q).then((snapshot)=>{
              
              console.log('>> snapshot.docs: ', snapshot.docs);
    
    
                const products4ConFormato = snapshot.docs.map((rawDoc) => {
                    return {
                        id: rawDoc.id,
                        ...rawDoc.data()
                    }
    
                });
           
           
    
                console.log('>> products4:', products4ConFormato);
                resolve(products4ConFormato);
    
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

          console.log(docSnap.data());
          response = docSnap.data();

      } else {
          console.log("Document does not exist")
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