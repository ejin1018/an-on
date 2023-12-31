import React,{ useState,useEffect,useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../actions";
import { API_URL } from "../config/url"
import axios from "axios";
import Modal from "../components/Modal";

// console 확인 용으로 잠시 import 
import { store } from '../store';

export default function Login(){
  const movoTo = useNavigate();
  const mailCheck = useRef();
  const pwCheck = useRef();
  const dispatch = useDispatch();
  const [allUser,setAllUser] = useState("");
  const [loginEmail,setLoginEmail] = useState("");
  const [loginPw,setLoginPw] = useState("");
  const [modalOn,setModalOn] = useState(false);

  useEffect(()=>{
    axios.get(`${API_URL}/anonuser`).then((all)=>{
      setAllUser(all.data.anonUser);
    }).catch((err)=>{
      console.log('회원 조회 실패', err)
    })
  },[])
  
  function logMailFn(e){
    setLoginEmail(e.target.value)
    mailCheck.current.className = 'logNsign-form-alert-off';
  }
  function logPwFn(e){
    setLoginPw(e.target.value);
    pwCheck.current.className = 'logNsign-form-alert-off';
  }

  function LoginFn(e){
    e.preventDefault();
    let formEm = e.target[0].value;
    let formPw = e.target[1].value;

    for(let i=0; i<allUser.length; i++){
      if(allUser[i].email == formEm){
        mailCheck.current.className = 'logNsign-form-alert-off'
        if(JSON.stringify(allUser[i].password).indexOf(formPw) > 0){
          pwCheck.current.className = 'logNsign-form-alert-off'
          dispatch(loginAction({id:allUser[i].id,email:formEm,password:formPw,nickname:allUser[i].nickname,calendar:allUser[i].calendar}));
          movoTo('/home');
          break;
        }else if(JSON.stringify(allUser[i].password).indexOf(formPw) == -1){
          pwCheck.current.className = 'logNsign-form-alert'
        }
        break;
      }else{
        mailCheck.current.className = 'logNsign-form-alert'
      }
    }
    {console.log('클릭 후',store.getState())}
  }

  function goSigninFn(){
    setModalOn(true);
  }

  return(
    <div className="login">
      {modalOn?
        <Modal msg={`프로젝트 테스트용이니, 평소 사용하지 않는 아이디와 비밀번호로 가입하실 것을 추천드립니다!`} modalWhere={'/signin'} modalBtn={'알겠습니다!'} />
      :
        ``
      }
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
              value={loginPw}
            />
            <p className="logNsign-form-alert-off" ref={mailCheck}>조회되지 않는 이메일입니다</p>
            <p className="logNsign-form-alert-off" ref={pwCheck}>비밀번호를 확인하세요</p> 
            {loginEmail == "" || loginPw == ""?<button type="submit" disabled>로그인</button>:<button type="submit">로그인</button>}
            <Link className="go-signin" onClick={goSigninFn}>회원가입</Link>
          </form>
        </div>
      </div>
    </div>
  )
}