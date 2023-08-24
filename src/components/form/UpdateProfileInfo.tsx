// import { collection, addDoc } from "firebase/firestore";
// import {db} from '../../services/Firebase';
   
//     const addForm = async (e:any) => {
//         e.preventDefault();  
        
//         const target = e.target;
        
//         const data = {
//           name: target.name.value,
//           email: target.email.value,
//           password: target.password.value,
//           confirmPassword:target.confirmPassword.value,
//           conditionsAccepted: target.conditionsAccepted.checked,
//       };
       
//         try {
//             const docRef = await addDoc(collection(db, "Users","Todos"), {
//               Form: data,    
//             });
//             console.log("Document written with ID: ", docRef.id);
//           } catch (e) {
//             console.error("Error adding document: ", e);
//           }
//     }