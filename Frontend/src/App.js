import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { SetPortfolioData,ShowLoading, HideLoading, ReloadData } from './redux/rootSlice';
import Admin from './pages/Admin';
import Login from './pages/Admin/Login';

function App() {
  // const [showLoading, setShowLoading] = useState(false);
  const {loading, portfolioData,reloadData} = useSelector(state => state.root)
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get('https://portfolio-0fue.onrender.com/get-portfolio-data');
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
    } catch (error) {
      // dispatch(HideLoading());
      console.log(error);
    } 
    finally {
      dispatch(HideLoading());
    }
  };
  

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData()
    }
  }, [portfolioData]);

  useEffect(()=>{
    if(reloadData){
      getPortfolioData();
    }
  },[reloadData])


//  useEffect(() =>{
//     console.log(portfolioData);
    
//  },[portfolioData])

  return (

    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin-login' element={<Login />} />
      </Routes>

    </BrowserRouter>

    // <div className="App flex h-screen items-center justify-center">
    //   <h1 className='text-5xl'>Hello World!</h1>
    // </div>
  );
}

export default App;
