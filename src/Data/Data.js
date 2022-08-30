import {db} from '../api/APIFirebase'
import { collection, getDocs,query,where,doc,getDoc,setDoc,increment,updateDoc } from 'firebase/firestore'

export const Categories =[

  {
    "categoryName":"Microcontroladores",
    "categoryId":0
  },

  {
    "categoryName":"Placas",
    "categoryId":1
  },
  
  {
    "categoryName":"Sensores",
    "categoryId":2
  }
 

]




      // export const searchCategories = () => 
      //     {
      //       return new Promise((res,rej)=>
      //       {
      //         let condition = true
      //         if (condition)
      //         {
      //           setTimeout(()=>
      //           {
      //             console.log(Categories);
      //             res(Categories);
      //             // rej(console.log("ERROR EN BASE DE DATOS"))
      //           },2000)
      //         } else
      //         {
      //           rej(console.log("No hay datos"))
      //         }
      //       })
      //     } 

    

      //     export const getItemByCategory= (categoryId) => {
      //       // const getItem = function (Item){
      
      //         return new Promise((res,rej)=>
      //         {
      
      //           let condition = true
      //           if (condition)
      //           {

      //             // SI NO SE PASA LA CATEGORIA, DEVUELVO TODOS LOS products4 ( COMO ES EL CASO DE CUANDO VOY A HOME)
                 
      //               setTimeout(()=>
      //               {
      //                 if (categoryId != null) 
      //                 {
      //                 res(Data.filter(prod=>prod.categoryId == categoryId))
      //                 // rej(console.log("ERROR EN BASE DE DATOS"))
      //               } else
      //               {
      //                 res(Data)
      //               }
      //               },2000)
                  
      //           }
      //         })
      //       }

      //       export const getItem= (itemId) => {
      //         // const getItem = function (Item){
        
      //           return new Promise((res,rej)=>
      //           {
        
      //             let condition = true
      //             if (condition){
      //               setTimeout(()=>{
      //                 const resultado =Data.filter(product=>product.id == itemId);
      //                 console.log("EL RESLTADO DE LA BUSQUEDA ES : ")
      //                 console.log(resultado[0]);
      //                 res(resultado[0]);
      //                 // rej(console.log("ERROR EN BASE DE DATOS"))
      //             },2000)
      //             }
      //           })
      //         }
      
  
      // export default getFetch;
      //  export default getItem;

      export function searchCategoriesFirebase () {

        // TODO: Realizar un refactor utilizando Async/Await en lugar de Promise.then
    
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

  //   export function getItemFirebase (itemId) {

  //     // TODO: Realizar un refactor utilizando Async/Await en lugar de Promise.then
  
  //     return new Promise( (resolve, reject) => {
  //         // creo la referencia a la coleccion que quiero traer
  //         const colRef = collection(db,'products4');
  //         if (itemId ==null )
  //         {
  //           console.log("<>><<><><>ITEM ID ES NULO!!!: ", itemId);
  //           getDocs(colRef).then((snapshot) => {
  //             console.log('>> snapshot.docs: ', snapshot.docs);
  
  
  //             const products4ConFormato = snapshot.docs.map((rawDoc) => {
  //                 return {
  //                     id: rawDoc.id,
  //                     ...rawDoc.data()
  //                 }
  
  //             });
         
         
  
  //             console.log('>> products4:', products4ConFormato);
  //             resolve(products4ConFormato);
  
  //         }, (error) => {
  //             reject('>> Error al intentar traer los docs: ', error);
  //         });
  //       } else
  //       {
  //         console.log("El item que estoy buscando es > :", itemId);
  //         // const q = query(collection(db,'products4'),where("id","==","R1otHYgyXa3VdhA3Gwad"));  
  //         // probar con db.collection('books').doc('fK3ddutEpD2qQqRMXNW5').get()
  //         const ItemRef = doc(db,'products4','st0hZfF9BPst4ZyhSVPo');

  //         getDoc(ItemRef).then((snapshot)=>{
            
  //           console.log('>> snapshot.docs: ', snapshot.docs);
  
  
  //             const products4ConFormato = snapshot.docs.map((rawDoc) => {
  //                 return {
  //                     id: rawDoc.id,
  //                     ...rawDoc.data()
  //                 }
  
  //             });
         
         
  //             console.log({id: snapshot.id, ...snapshot.data()});
  //             console.log('>> products4:', products4ConFormato);
  //             resolve(products4ConFormato);
  
  //         }, (error) => {
  //             reject('>> Error al intentar traer los docs: ', error);
          
  //         });
  //       }
  //     });
  
  // }

  export async function getItemFirebase (itemId) {

    let response = [];
    // creo la referencia a la coleccion que quiero traer
   
  const itemRef = doc(db, 'products4', itemId);

    try {
      const docSnap = await getDoc(itemRef);
      if(docSnap.exists()) {
          console.log(docSnap.data());
          // response = docSnap.data.map((rawDoc) => {
          //   return {
          //   id: rawDoc.id,
          //   ...rawDoc.data()
          //   }
          //   });

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