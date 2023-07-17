import React,{ useState, useEffect,useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/url"

export default function Signin(){
  const moveTo = useNavigate();

  const [allUser,setAllUser] = useState(null);

  const getUserData = ()=>{
    axios.get(`${API_URL}/anonuser`).then((all)=>{
      setAllUser(all.data.anonUser);
    }).catch((err)=>{
      console.log('회원 조회 실패', err)
    })
  }
  getUserData();

  const [userMail,setUserMail] = useState("");
  const [userPw,setUserPw] = useState("");
  const [userRepw,setUserRepw] = useState("");
  const [userNick,setUserNick] = useState("");
  const [acceptMail,setAcceptMail] = useState(false);
  const [acceptNick,setAcceptNick] = useState(false);
  const mailCheck = useRef();
  const nickCheck = useRef();
  const repwCheck = useRef();

  const signEmFn = (e)=>{
    setUserMail(e.target.value);
    for(let i=0; i<allUser.length; i++){
      if(e.target.value === allUser[i].email){
        mailCheck.current.className = 'logNsign-form-alert'
        setAcceptMail(false);
        break;
      }else{
        mailCheck.current.className = 'logNsign-form-alert-off'
        setAcceptMail(true);
      }
    }
  }
  const signPwFn = (e)=>{
    setUserPw(e.target.value)
  }
  const signRePwFn = (e)=>{
    setUserRepw(e.target.value);
    if(userPw != e.target.value){
      repwCheck.current.className = 'logNsign-form-alert'
    }else{
      repwCheck.current.className = 'logNsign-form-alert-off'
    }
  }
  const signNickFn = (e)=>{
    setUserNick((e.target.value).replace(/\s/g,""));
    for(let i=0; i<allUser.length; i++){
      if(e.target.value === allUser[i].nickname){
        nickCheck.current.className = 'logNsign-form-alert'
        setAcceptNick(false);
        break;
      }else{
        nickCheck.current.className = 'logNsign-form-alert-off'
        setAcceptNick(true);
      }
    }
  }
  const SigninFn = (e)=>{
    e.preventDefault();

    axios.post(`${API_URL}/anonuser`,{
      email:userMail,
      password:userPw,
      nickname:userNick
    })
    .then((result)=>{
      console.log(result.data);
      getUserData();
    }).catch((error)=>{
      console.log("회원가입 실패",error)
    });

    moveTo("/login");
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
          <p className="logNsign-form-alert-off" ref={mailCheck}>이미 사용중인 메일입니다</p>
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
          <p className="logNsign-form-alert-off" ref={repwCheck}>비밀번호가 일치하지 않습니다</p> 
          <input 
            type="text" 
            placeholder="별명"
            value={userNick}
            onChange={signNickFn}
          />
          <p className="logNsign-form-alert-off" ref={nickCheck}>이미 사용중인 별명입니다</p>
          { userMail == "" || userPw == "" || userRepw == "" || userNick == "" || acceptMail === false || acceptNick === false
          ? 
            <button type="submit" disabled>회원가입</button>
          :
            <button type="submit">회원가입</button>
          }
        </form>
      </div>
    </div>
  )
}