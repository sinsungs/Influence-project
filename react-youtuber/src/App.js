
// import PostList from './PostList';
// import PostDetail from './PostDetail';
// import NotFound from './NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import YoutuberCreate from './pages/YoutuberCreate';
import Youtuber from './pages/Youtuber';

import Join from './pages/Join';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Meeting from './pages/Meeting';
import Quill from './pages/Quill';
import Banner from './components/Banner';
import Category from './components/Category';
import Admin from './pages/Admin'

import KakaoLoginHandeler from './pages/KakaoLoginHandeler'
import InfluencerPost from './pages/InfluencerPost';
import InfluencerList from './pages/InfluencerList';

import Ranking from './pages/Ranking';

function App() {

  const [message, setMessage] = useState([]);
  
  const Proxytest = () => {
    axios.get('/hello')
      .then((res) => {
        setMessage(res.data);
        alert(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleButtonClick = () => {
    Proxytest();
  };

  return (
    
    <Router>
      <div>
        <button onClick={handleButtonClick}>Proxy 테스트</button>
      </div>

        <Header />

        {/* <Banner /> */}
        <Category />


        <Routes>
          <Route path="/login/oauth2/callback/kakao" element={<KakaoLoginHandeler />} 
  />
          <Route path="/post" element={<InfluencerPost/>}/>
          <Route path="/list" element={<InfluencerList/>}/>

          <Route path="/quill" element={<Quill/>}/>
          <Route path="/meeting" element={<Meeting/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/join" element={<Join/>}/>
          <Route path="/youtuber" element={<Youtuber/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/ranking" element={<Ranking/>}/>

        </Routes>

        <Footer />
        

    </Router>
  );
}

export default App;