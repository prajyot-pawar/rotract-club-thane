// import React from 'react';
// import { useParams } from 'react-router-dom';

// interface profile {
//   id: string;
//   name: string;
//   date: string;
//   description: string;
// }

// interface ProfileDetailsProps {
//   profiles: profile[];
// }

// const ProfileDetails: React.FC<ProfileDetailsProps> = ({ profiles }) => {
//   const { profileId } = useParams<{ profileId: string }>();
//   const profile = profiles.find((profile) => profile.id === profileId);

//   if (!profile) {
//     return <div>profile not found</div>;
//   }

//   return (
//     <div>
//       <h1>{profile.name}</h1>
//       <p>Date: {profile.date}</p>
//       <p>Description: {profile.description}</p>
//     </div>
//   );
// };

// export default ProfileDetails;
