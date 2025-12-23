import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '@/features/authSlice.js';

// Components
import Navbar from '@/components/layout/Navbar.jsx';
import Login from '@/components/auth/Login.jsx';
import Register from '@/components/auth/Register.jsx';
import ProtectedRoute from '@/components/auth/ProtectedRoute.jsx';
import AdminRoute from '@/components/auth/AdminRoute.jsx';
import ProductList from '@/components/products/ProductList.jsx';
import ProductsTable from '@/components/admin/ProductsTable.jsx';
import ProductForm from '@/components/admin/ProductForm.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductList />} />

          {/* Admin Routes */}
          <Route
            path="/admin/products"
            element={
              <AdminRoute>
                <ProductsTable />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/products/new"
            element={
              <AdminRoute>
                <ProductForm />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/products/edit/:id"
            element={
              <AdminRoute>
                <ProductForm />
              </AdminRoute>
            }
          />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
