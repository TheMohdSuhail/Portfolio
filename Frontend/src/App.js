// src/App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect, useCallback } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { SetPortfolioData, ShowLoading, HideLoading, ReloadData } from './redux/rootSlice';
import Admin from './pages/Admin';
import Login from './pages/Admin/Login';

function App() {
  const { loading, portfolioData, reloadData } = useSelector(state => state.root);
  const dispatch = useDispatch();

  // Set base URL for Axios
  const api = axios.create({
    baseURL: 'https://portfolio-0fue.onrender.com/api/portfolio',
  });

  const getPortfolioData = useCallback(async () => {
    try {
      dispatch(ShowLoading());
      const response = await api.get('/get-portfolio-data');
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    } finally {
      dispatch(HideLoading());
    }
  }, [dispatch, api]);

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData, getPortfolioData]);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData, getPortfolioData]);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin-login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
