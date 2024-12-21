import React from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();
  const token = localStorage.getItem('adminToken');

  // Si no hay token y no estamos en la página de login, redirigir a login
  if (!token && location.pathname !== '/admin/login') {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
};

export default AdminLayout;