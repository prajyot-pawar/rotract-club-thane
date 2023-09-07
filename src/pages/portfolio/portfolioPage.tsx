import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { doc, getFirestore } from "firebase/firestore";
import { db } from '../../services/Firebase';
import UserProfile from './repo/profileDetails';

const Portfolio: React.FC = () => {
  const { profileId }= useParams();
  
  console.log("This is profileId :"+ profileId);
  // const profile = profiles.find((profile) => profile.id === profileId);

  // if (!profile) {
  //   return <div>profile not found</div>;
  // }
  

  return (
      <UserProfile uid={profileId!} />
  );
};

export default Portfolio;
