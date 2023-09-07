
import { doc, setDoc } from 'firebase/firestore';
import { AuthContext } from '../../utils/auth-context';
import '../form/UpdateProfileInfo';
import ImageUpload from '../imageupload/image-upload';
import { useContext ,useState} from 'react';
import { db } from '../../services/Firebase';
import classNamesMemberForm from '../form/memberform.module.css'
// import ImageUpload from '../imageupload/image-upload';
   

export const MemberForm = () => {
    
  const { currentUserId } = useContext(AuthContext);
  
  const [imageUrl, setImageUrl] = useState<string | null>(null);


     const onSubmit = async  (event: any) => {
         event.preventDefault();
 
         const target = event.target;
 
         const data = {
             fname: target.fname.value,
             sname: target.sname.value,
             email: target.email.value,
             edu10: target.edu10.value,
             edu12: target.edu12.value,
             edugrad: target.edugrad.value,
             tel_no: target.tel_no.value,
             projects: target.projects.value,
             profileUrl: imageUrl,
             conditionsAccepted: target.conditionsAccepted.checked,
         };         
         console.log(data);         
    try {     
        const userRef = doc(db, "users", currentUserId);  
        await setDoc(userRef,data);
        console.log('Document written with ID:', userRef.id);
      } catch (error) {
        console.error('Error adding document:', error);
      }

     };
     
  const handleImageUrlChange = (url: string) => {
    setImageUrl(url);
  };
 
     return (<>
        <h3>Welcome!</h3>
         <form className={classNamesMemberForm.form} onSubmit={onSubmit}>
             <div className={classNamesMemberForm.field}>
                 <label htmlFor="fname">First Name</label><label>:</label>
                 <input id="fname" required/>
             </div>
             <div className={classNamesMemberForm.field}>
                 <label htmlFor="sname">Last Name</label><label>:</label>
                 <input id="sname" required/>
             </div>
             <div className={classNamesMemberForm.field}>
                 <label htmlFor="email">Email</label><label>:</label>
                 <input type="email" id="email" required/>
             </div>             
             <div className={classNamesMemberForm.field}>
                 <label htmlFor="tel_no">tel_no</label><label>:</label>
                 <input type="tel" name="phone" pattern="[0-9]{10}" id="tel_no" required/>
             </div>  
             <div className={classNamesMemberForm.edu}>
             <div className={classNamesMemberForm.field}>
                 <label htmlFor="edu10">10th Marks</label><label>:</label>
                 <input type="text" id="edu10" />
             </div>
             <div className={classNamesMemberForm.field}>
                 <label htmlFor="edu12">12th Marks</label><label>:</label>
                 <input type="text" id="edu12" />
             </div>
             <div className={classNamesMemberForm.field}>
                 <label htmlFor="edugrad">Graduation Marks</label><label>:</label>
                 <input type="text" id="edugrad" />
             </div>      
             </div>       
             <div className={classNamesMemberForm.field}>
                 <label htmlFor="projects">Projects</label><label>:</label>
                 <input type="text" id="projects" />
             </div>
             <div className={classNamesMemberForm.field}>
             <ImageUpload onImageUrlChange={handleImageUrlChange}/>
             </div>       
             <div className={classNamesMemberForm.field_check}>                
             <input type="checkbox" id="conditionsAccepted" />
                 <label htmlFor="conditionsAccepted" >I agree to the terms and conditions</label>
             </div>
             <button type="submit">Publish</button>
         </form>
     </>
     );
 };
 