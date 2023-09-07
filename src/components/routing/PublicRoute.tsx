// import React, { ReactNode } from 'react';
// import { Route,RouteProps, RouterProps } from 'react-router-dom';


// interface PublicRouteProps extends RouterProps {
//   isAuthenticated: boolean;
//   children: ReactNode;
// }

// const PublicRoute: React.FC<PublicRouteProps> = ({ isAuthenticated, children, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) => (
//         !isAuthenticated ? (
//           children
//         ) : (
//           <Redirec
//             to={{
//               pathname: '/home',
//               state: { from: location }
//             }}
//           />
//         )
//       )}
//     />
//   );
// }

// export default PublicRoute;
