import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { SetPortfolioData, ShowLoading, HideLoading, ReloadData } from './redux/rootSlice';
import Admin from './pages/Admin';
import Login from './pages/Admin/Login';
import { message } from 'antd';

function App() {
  const { loading, portfolioData, reloadData } = useSelector(state => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get('https://portfolio-0fue.onrender.com/api/portfolio/get-portfolio-data');
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
    } catch (error) {
      dispatch(HideLoading());
      message.error('Failed to fetch portfolio data');
      console.error(error);
    } finally {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData || reloadData) {
      getPortfolioData();
    }
  }, [portfolioData, reloadData]);

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
