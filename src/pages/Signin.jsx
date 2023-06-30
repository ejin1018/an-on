import React from "react";
import { Link } from "react-router-dom";

export default function Signin(){
  return(
    <div className="signin">
      <div className="signin-inner">
        <Link to={'/'} className="splash-logo">
          <img src="/images/fullLogo.png" alt="" />
        </Link>
        <form action="post" className="logNsign-form">
          <input 
            type="email" 
            placeholder="이메일" 
          />
          <input 
            type="password" 
            placeholder="비밀번호"
          />
          <input 
            type="password" 
            placeholder="비밀번호 확인"
          />
          <input 
            type="text" 
            placeholder="별명"
          />
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  )
}