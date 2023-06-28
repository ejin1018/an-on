import React from "react";
import { Link } from "react-router-dom";

export default function Login(){
  return(
    <div className="login">
      <div className="login-inner">
        <Link to={'/'} className="splash-logo">
          <img src="/images/fullLogo.png" alt="" />
        </Link>
        <form action="post">
          <input type="email" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  )
}