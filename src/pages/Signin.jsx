import React,{ useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/url"

export default function Signin(){
  const [userMail,setUserMail] = useState("");
  const [userPw,setUserPw] = useState("");
  const [userRepw,setUserRepw] = useState("");
  const [userNick,setUserNick] = useState("");
  const signEmFn = (e)=>{
    setUserMail(e.target.value)
  }
  const signPwFn = (e)=>{
    setUserPw(e.target.value)
  }
  const signRePwFn = (e)=>{
    setUserRepw(e.target.value)
  }
  const signNickFn = (e)=>{
    setUserNick(e.target.value)
  }
  
  const SigninFn = (e)=>{
    e.preventDefault();

    axios.post(`${API_URL}/anonuser`,{
      email:userMail,
      password:userPw,
      nickname:userNick
    })
    .then((result)=>{
      console.log(result.data)
    }).catch((error)=>{
      console.log("회원가입 실패",error)
    })
  }


  return(
    <div className="signin">
      <div className="signin-inner">
        <Link to={'/'} className="splash-logo">
          <img src="/images/fullLogo.png" alt="" />
        </Link>
        <form action="post" className="logNsign-form" onSubmit={SigninFn}>
          <input 
            type="email" 
            placeholder="이메일" 
            value={userMail}
            onChange={signEmFn}
          />
          <input 
            type="password" 
            placeholder="비밀번호"
            onChange={signPwFn}
            pattern="^[a-zA-Z0-9]{5,}$"
            title="영문 + 숫자 5글자 이상"
          />
          <input 
            type="password" 
            placeholder="비밀번호 확인"
            onChange={signRePwFn}
          />
          {userPw != userRepw ? 
          <p className="signin-alert">비밀번호가 일치하지 않습니다</p>
          :
          ``
          }
          <input 
            type="text" 
            placeholder="별명"
            value={userNick}
            onChange={signNickFn}
          />
          { userMail == "" || userPw == "" || userRepw == "" || userNick == "" ? 
          <button type="submit" disabled>회원가입</button>
          :
          <button type="submit">회원가입</button>
          }
        </form>
      </div>
    </div>
  )
}