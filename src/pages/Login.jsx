import React,{ useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../actions";
import { API_URL } from "../config/url"
import axios from "axios";

// console 확인 용으로 잠시 import 
import { store } from '../store';

export default function Login(){
  const dispatch = useDispatch();
  const [allUser,setAllUser] = useState("");
  const [loginEmail,setLoginEmail] = useState("");
  const [loginPw,setLoginPw] = useState("");
  const [validUserEm,setValidUserEm] = useState(false);
  const [validUserPw,setValidUserPw] = useState(false);

  useEffect(()=>{
    axios.get(`${API_URL}/anonuser`).then((all)=>{
      setAllUser(all.data.anonUser);
    }).catch((err)=>{
      console.log('회원 조회 실패', err)
    })
  },[])

  const eachUserFn = (here,emorpw,setSt)=>{
    for(let i=0; i<allUser.length; i++){
      if (emorpw == 'em'){
        if(allUser[i].email != here){
          // 로그인 불가
          console.log('❌')
          setSt(false)
        }else{
          // 로그인 가능
          console.log('⭕️')
          setSt(true)
          break;
        }
      }else if(emorpw == 'pw'){
        if(allUser[i].password != here){
          // 로그인 불가
          console.log('❌')
          setSt(false)
        }else{
          // 로그인 가능
          console.log('⭕️')
          setSt(true)
          break;
        }
      }
    }
  }
  
  function logMailFn(e){
    setLoginEmail(e.target.value)
    eachUserFn(e.target.value,'em',setValidUserEm);
    // 기존 db에 등록된 test 는 정상적으로 작동함
    // 추가로 회원가입한 정보는 일치 조회를 하지만 바로 불일치 결과를 띄움 뭐지?
    // 회원가입에서도 이럼 ... 
    // 하하 알아냈다 !!!! jane lisa test 이런 순서로 되어있어서 o x x / x o x / x x o 이런 식으로 조회가 되기 때문에 test는 되는것처럼 보였던 것이다 !!!
    // o 일 때 break 하라고 넣으면 해결되는 것 !!!
  }
  function logPwFn(e){
    setLoginPw(e.target.value)
    eachUserFn(e.target.value,'pw',setValidUserPw)
  }

  function LoginFn(e){
    e.preventDefault();
    dispatch(loginAction({email:'one',password:'two',nickname:'three'}));
    {console.log('클릭 후',store.getState())}
  }

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
              onChange={logMailFn}
              value={loginEmail}
              />
            <input 
              type="password" 
              placeholder="비밀번호"
              onChange={logPwFn}
            />
          {validUserEm && validUserPw ? 
            <button type="submit">로그인</button>
            :<button type="submit" disabled>로그인</button>}
          <Link to={'/signin'} className="go-signin">회원가입</Link>
          </form>
        </div>
      </div>
    </div>
  )
}