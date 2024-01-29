
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '@src/components/services/api';

const PrivateRoute = ({ element, path }) => {
  return isLoggedIn() ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
