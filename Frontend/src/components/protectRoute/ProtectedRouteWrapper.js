// import React, { useEffect, useState } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import AdminPage from '../../admin/admin'
// import Moderator from '../../moderator/moderator'
// import ArticleControl from '../../comments/ArticleControl'

// const ProtectedRouteWrapper = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('accessToken');
//     const userRole = localStorage.getItem('role');

//     if (!token) {
//       // Redirect to login page if token is not present
//       alert('Please login first');
//       navigate("/");
//     } else if (userRole === "ADMIN") {
//       // Redirect to admin page if the user is an admin
//       navigate("/admin");
//     } else if (userRole === "MODERATOR") {
//       // Redirect to moderator page if the user is a moderator
//       navigate("/moderator");
//     } else {
//       // Redirect to unauthorized page if the user has no role
//       alert('You are not authorized to access this page');
//       navigate("/");
//     }
//   }, []);
//   const [isDashboard, setIsDashboard] = useState(false);
//   const renderProtectedComponent = () => {
//     const userRole = localStorage.getItem('role');
    

//     if (userRole === "ADMIN") {
//       return <AdminPage />;
//     } else if (userRole === "MODERATOR") {
//       const currentUrl = window.location.pathname;
//       if (currentUrl === "/moderator") {
//         return <Moderator />;
//       } else if (currentUrl === "/articlecontrol") {
//         return <ArticleControl />;
//       } else {
//         alert('Invalid URL');
//         navigate("/moderator"); // Redirect to moderator page if the URL is invalid
//       }
//     } else {
//       return null; // or render an unauthorized page component
//     }
//   };

//   return (
//     <div>
//     {renderProtectedComponent()}
//   </div>
//   );
// };

// export default ProtectedRouteWrapper;


import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AdminPage from '../../admin/admin'
import Moderator from '../../moderator/moderator'

const ProtectedRouteWrapper = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const userRole = localStorage.getItem('role');

    if (!token) {
      // Redirect to login page if token is not present
      alert('Please login first');
      navigate("/");
    } else if (userRole === "ADMIN") {
      // Redirect to admin page if the user is an admin
      navigate("/admin");
    } else if (userRole === "MODERATOR") {
      // Redirect to moderator page if the user is a moderator
      navigate("/moderator");
    } else {
      // Redirect to unauthorized page if the user has no role
      alert('You are not authorized to access this page');
      navigate("/");
    }
  }, []);

  const renderProtectedComponent = () => {
    const userRole = localStorage.getItem('role');

    if (userRole === "ADMIN") {
      return <AdminPage />;
    } else if (userRole === "MODERATOR") {
      return <Moderator />;
    } else {
      return null; // or render an unauthorized page component
    }
  };

  return (
    <div>
    {renderProtectedComponent()}
  </div>
  );
};

export default ProtectedRouteWrapper;
