import logo from '../logo.svg';
import '../App.css';
import $ from "jquery";
import axios from 'axios';
import { Link } from 'react-router-dom';

import React, {useState, useEffect} from 'react';

function YoutuberList() {

    const [formData, setFormData] = useState({
      title: '',
      content: '',
      yno: ''
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('/post/register', formData);
  
        // Handle the response as needed
        console.log('Response:', response);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* <ul>
          {msg.map((content, idx) => <li key={`${idx} - ${content}`}>{content}</li>)}
        </ul> */}


        <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>책 제목 : </label>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>소개 내용</label>
        <textarea
          className="form-control"
          rows="5"
          name="content"
          value={formData.content}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label>유튜버 선택하기</label>
        <input
          type="text"
          className="form-control"
          name="yno"
          placeholder="유튜버를 선택해주세요"
          value={formData.yno}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        게시글 등록하기
      </button>
    </form>

    <button id="addTaskBtn">할 일 추가 <span>+</span> </button>
    <button id="closeModalBtn">할 일 삭제 <span>+</span> </button>
      </header>
      
      <div className="container">

        <div className="box">
          <div className="box-header">1번째 박스</div>
          <div className="box-body">프론트엔드에 디자인 시스템 적용하기</div>
          <div className="box-footer">by seo_namu</div>
        </div>

        <div className="box">
          <div className="box-header">2번째 박스</div>
          <div className="box-body">프론트엔드에 디자인 시스템 적용하기</div>
          <div className="box-footer">by seo_namu</div>
        </div>
        <div className="box">
          <div className="box-header">3번째 박스</div>
          <div className="box-body">프론트엔드에 디자인 시스템 적용하기</div>
          <div className="box-footer">by seo_namu</div>
        </div>
        <div className="box">
          <div className="box-header">4번째 박스</div>
          <div className="box-body">프론트엔드에 디자인 시스템 적용하기</div>
          <div className="box-footer">by seo_namu</div>
        </div>
        <div className="box">
          <div className="box-header">5번째 박스</div>
          <div className="box-body">프론트엔드에 디자인 시스템 적용하기</div>
          <div className="box-footer">by seo_namu</div>
        </div>
        <div className="box">
          <div className="box-header">6번째 박스</div>
          <div className="box-body">프론트엔드에 디자인 시스템 적용하기</div>
          <div className="box-footer">by seo_namu</div>
        </div>
        <div className="box">
          <div className="box-header">7번째 박스</div>
          <div className="box-body">프론트엔드에 디자인 시스템 적용하기</div>
          <div className="box-footer">by seo_namu</div>
        </div>
        <div className="box">
          <div className="box-header">8번째 박스</div>
          <div className="box-body">프론트엔드에 디자인 시스템 적용하기</div>
          <div className="box-footer">by seo_namu</div>
        </div>
        <div className="box">
          <div className="box-header">9번째 박스</div>
          <div className="box-body">프론트엔드에 디자인 시스템 적용하기</div>
          <div className="box-footer">by seo_namu</div>
        </div>
        <div className="box">
          <div className="box-header">10번째 박스</div>
          <div className="box-body">프론트엔드에 디자인 시스템 적용하기</div>
          <div className="box-footer">by seo_namu</div>
        </div>
        <div className="box">
          <div className="box-header">11번째 박스</div>
          <div className="box-body">프론트엔드에 디자인 시스템 적용하기</div>
          <div className="box-footer">by seo_namu</div>
        </div>
        <div className="box">
          <div className="box-header">12번째 박스</div>
          <div className="box-body">프론트엔드에 디자인 시스템 적용하기</div>
          <div className="box-footer">by seo_namu</div>
        </div>

      </div>
      
    </div>

    // App End
  );
}

export default YoutuberList;
