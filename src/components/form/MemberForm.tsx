
import '../form/UpdateProfileInfo';
   

export const MemberForm = () => {
     const onSubmit = (event: any) => {
         event.preventDefault();
 
         const target = event.target;
 
         const data = {
             fname: target.fname.value,
             sname: target.sname.value,
             email: target.email.value,
             password: target.password.value,
             confirmPassword:target.confirmPassword.value,
             conditionsAccepted: target.conditionsAccepted.checked,
         };
         console.log(data);
     };
     
 
     return (
         <form className="form" onSubmit={onSubmit}>
             <div className="field">
                 <label htmlFor="fname">First Name : </label>
                 <input id="fname" />
             </div>
             <div className="field">
                 <label htmlFor="sname">Last Name : </label>
                 <input id="sname" />
             </div>
             <div className="field">
                 <label htmlFor="email">Email : </label>
                 <input type="email" id="email" />
             </div>
             <div className="field">
                 <label htmlFor="password">Password : </label>
                 <input type="password" id="password" />
             </div>
             <div className="field">
                 <label htmlFor="confirmPassword">Confirm password</label>
                 <input type="password" id="confirmPassword" />
             </div>
             <div className="field checkbox">
                 <input type="checkbox" id="conditionsAccepted" />
                 <label htmlFor="conditionsAccepted">I agree to the terms and conditions</label>
             </div>
             <button type="submit">Submit</button>
         </form>
     );
 };
 