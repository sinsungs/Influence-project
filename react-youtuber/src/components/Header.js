import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import kakao_login_button from '../img/kakao_login_button.png';
import kakao_payment_button from '../img/kakao_payment_button.png';

function Header() {

  const handleKakaoPaymentClick = () => {
    // Replace 'http://localhost:8080/payment/ready' with the correct URL for your payment endpoint
    const paymentEndpoint = '/payment/ready';

    // Perform the Axios GET request
    axios.get(paymentEndpoint)
      .then(response => {
        // Handle the response if needed
        console.log('Payment response:', response);
        // Redirect to the payment page, if required
        // window.location.href = paymentEndpoint;
        window.open(response.data, '_blank');
      })
      .catch(error => {
        // Handle errors, if necessary
        console.error('Error making payment request:', error);
      });
  };

  return (
    <header>
      <div className='top'>

        <div>
          <h1>Good Influence 인플루언스</h1>
        </div>

        <div>
          {/* <button class="mypage-button">내 정보</button> */}

          {/* <Link to="/mypage"><button class="login-button">마이페이지</button></Link> */}
          <Link to="/join"><button class="login-button">회원가입</button></Link>
          <Link to="/login"><button class="login-button">로그인</button></Link>
          
          <button class="login-button">SNS 인증</button>        
        </div>

        {/* <a href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=b58919f7c93ec635d5c0b3697d4aac6b&redirect_uri=http://localhost:8080/auth/kakao/callback">
        <img src={kakao_login_button} alt='kakao_image' /></a>
        <a href="http://localhost:8080/payment/ready">
        <img src={kakao_payment_button} alt='kakao_payment' /></a> */}

        {/* <button onClick={handleKakaoPaymentClick}>
          <img src={kakao_payment_button} alt='kakao_payment' />
        </button> */}
        {/* <form method="post" action="/kakaoPay">
        <button type="button">카카오페이로 결제하기</button>
        </form> */}
      </div>

      

      {/* <div className='bottom'>

<nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>

</div> */}



      <div className='center'>
        <div class="explore--wrapper">

          <div class="explore--item">

            <Link to="/meeting">
              <img src="https://plab-football.s3.amazonaws.com/static/img/explore_heart.svg" />
              <p>인플루언서<br/>소셜 모임</p>
            </Link>
            <Link to="/youtuber">
              <img src="https://plab-football.s3.amazonaws.com/static/img/explore_earlybird.svg" />
              <p>인플루언서<br/>둘러보기</p>
            </Link>
            <Link to="/list">
              <img src="https://plab-football.s3.amazonaws.com/static/img/explore_dribbler.svg" />
              <p>인플루언서<br/>추천 글</p>
            </Link>
            <Link to="/post">
              <img src="https://plab-football.s3.amazonaws.com/static/img/explore_seeding.svg" />
              <p>인플루언서<br/>추천글 작성하기</p>
            </Link>
            <Link to="/list">
              <img src="https://plab-football.s3.amazonaws.com/static/img/explore_fire.svg" />
              <p>HOT 인플루언서</p>
            </Link>


          </div>
        </div>

      </div>





    </header>
  );
}

export default Header;

