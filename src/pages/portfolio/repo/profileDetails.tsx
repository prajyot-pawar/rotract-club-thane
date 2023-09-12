import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { doc, getDoc  } from 'firebase/firestore';
import 'firebase/firestore';
import { db } from '../../../services/Firebase';
import { useParams } from 'react-router-dom';
import NavBar from '../../../components/navbar/navbar';
import HeroSectionPortFolio from '../layout/HeroSection';


function UserProfile({ uid }: { uid: string }) {
  const [user, setUser] = useState<any | null>(null);  
const [loading, setLoading] = useState(true); // Change 'any' to match your user data structure

useEffect(() => {
  
  const fetchUser = async () => {
    try {
      const userDoc =  doc(db, "users", uid);
      const userData = await getDoc(userDoc);
      
  console.log(userData.data());
      if (userData.exists()) {
        setUser(  userData.data());
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
    finally {
      setLoading(false); 
      console.log(loading);
    }
    
  };
  
  fetchUser();
  
}, [uid]);

  return (
    <div>
    {loading ? (
      <p>Loading user data...</p>
    ) : user ? (
      <>
      <NavBar/>
        <h1>{user.fname}</h1>
        <p>Name: {user.name}</p>
        <p>Profile URL: <a href={user.profileUrl} target="_blank" rel="noopener noreferrer">Profile Image</a></p>
        <p>Profile URL: <img src={user.profileUrl} alt="Trees" height="200" /></p>
      
        {/* Display other user properties as needed */}
      </>
    ) : (
      <p>User not found</p>
    )}
  </div>
  );
}

export default UserProfile;
