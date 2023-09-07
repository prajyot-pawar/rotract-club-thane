
import NavBar from '../components/navbar/navbar';
import {CSSProperties  } from 'react';
import HeroSectionPortFolio from './portfolio/layout/HeroSection';

const pageStyle:CSSProperties = {
     backgroundColor:'black',    
     minHeight: '100vh', 
     width: '100vw',
     height: 'auto',
     display: 'flex',    
     alignItems: 'center',    
     flexDirection: 'column' ,
     justifyContent: 'flex-start',
     fontSize:  '18px' ,
   };
 
   
function RoughPage() {
  return (
     <>
     <div style={pageStyle}>
          
     <NavBar/>     
     <HeroSectionPortFolio/>  
     </div>
     </>
  );
}

export default RoughPage;
