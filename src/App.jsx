import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations';
import Layout from './components/Layout';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <BrowserRouter>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/register" element={<RestrictedRoute element={<RegistrationPage />} />} />
              <Route path="/login" element={<RestrictedRoute element={<LoginPage />} />} />
              <Route path="/contacts" element={<PrivateRoute element={<ContactsPage />} />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  );
};

export default App;









