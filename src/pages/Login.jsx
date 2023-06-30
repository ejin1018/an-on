import React from "react";
import { Link } from "react-router-dom";


function LoginFn(e){
  e.preventDefault();
}

export default function Login(){
  return(
    <div className="login">
      <div className="login-inner">
        <Link to={'/'} className="splash-logo">
          <img src="/images/fullLogo.png" alt="" />
        </Link>
        <div className="form-wrap">
          <form action="post" onSubmit={LoginFn} className="logNsign-form">
            <input 
              type="email" 
              placeholder="이메일" 
            />
            <input 
              type="password" 
              placeholder="비밀번호"
            />
            <button type="submit">로그인</button>
          </form>
          <Link to={'/signin'} className="go-signin">회원가입</Link>
        </div>
      </div>
    </div>
  )
}