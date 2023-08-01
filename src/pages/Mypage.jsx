import React from "react";
import { useSelector,useDispatch } from "react-redux";
import Login from "./Login";
import { logoutAction } from "../actions";
import { useNavigate,Link } from "react-router-dom";
import MyCalendar from "../components/MyCalendar";

export default function Mypage(){
  const user = useSelector(state => state);
  const dispatch = useDispatch();
  const moveTo = useNavigate();

  function logoutFn(){
    dispatch(logoutAction());
    moveTo('/'); 
  }

  return(
    <>
      {user.email === null ?
        <Login />
      : (
      <div className="mypage">
        <section className="mypage-profile">
          <h2 className="mypage-profile-name">{user.nickname} 님의 마이페이지</h2>
          <button onClick={logoutFn}>로그아웃</button>
        </section>
        <section className="mypage-calendar">
          <h3 className="mypage-title">안온 캘린더</h3>
          <MyCalendar user={user} />
        </section>
        <section className="mypage-myanon">
          <h3 className="mypage-title">나의 안온</h3>
          <ul>
            <li>
              <Link to={'/'}>고장 접수 확인</Link>
            </li>
            <li>
              <Link to={'/'}>요금 정산 확인</Link>
            </li>
            <li>
              <Link to={'/'}>이사 예약 확인</Link>
            </li>
          </ul>
        </section>
        <section className="mypage-notice">
          <ul>
            <li>
              <Link to={'/'}>공지사항</Link>
            </li>
            <li>
              <Link to={'/'}>자주 묻는 질문</Link>
            </li>
            <li>
              <Link to={'/'}>약관 및 정책</Link>
            </li>
          </ul>
        </section>
      </div>
      )}
    </>
  )
}