import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { clearAdmin } from './auth/adminAuth';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
  
    clearAdmin();
  
    localStorage.removeItem('user');

 
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-2 flex-1">
          <Link to="/admin" className="block hover:text-blue-300">Inventory</Link>
          <Link to="/admin/products" className="block hover:text-blue-300">Products</Link>
          <Link to="/admin/category" className="block hover:text-blue-300">Category</Link>
          <Link to="/admin/moneyset" className="block hover:text-blue-300">Set Money</Link>
          <Link to="/admin/order" className="block hover:text-blue-300">Manage Order</Link>
          <Link to="/admin/sales" className="block hover:text-blue-300">Analysis</Link>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-4 w-full rounded-lg bg-red-600 py-2 font-medium text-white hover:bg-red-700 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
