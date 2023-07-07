import React from "react";
import { useSelector,useDispatch } from "react-redux";
import Login from "./Login";
import { logoutAction } from "../actions";
import { useNavigate } from "react-router-dom";

export default function Mypage(){
  const user = useSelector(state => state);
  const dispatch = useDispatch();
  const moveTo = useNavigate();
  function logoutFn(){
    dispatch(logoutAction());
    moveTo('/')
  }

  return(
    <>
      {user.email === null ?
        <Login />
      : (
      <div className="mypage">
        <div className="mypage-inner">
          <p>{user.nickname} 님의 마이페이지</p>
          <button onClick={logoutFn}>로그아웃</button>
        </div>
      </div>
      )}
    </>
  )
}