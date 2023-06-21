import React from "react";
import {Link} from "react-router-dom"

export default function BotNav(){
  return(
    <nav className="botnav-wrap">
      <ul className="botnav-container">
        <li>
          <Link to={'/home'} className="botnav-btn">
            <img src="/icons/botnav-icon2.png" className="botnav-btn-icon" alt="" />
            <p className="botnav-btn-name">홈</p>
          </Link>
        </li>
        <li>
          <Link to={'/home'} className="botnav-btn">
            <img src="/icons/botnav-icon4.png" className="botnav-btn-icon" alt="" />
            <p className="botnav-btn-name">고&nbsp;&nbsp;장</p>
          </Link>
        </li>
        <li>
          <Link to={'/home'} className="botnav-btn">
            <img src="/icons/botnav-icon5.png" className="botnav-btn-icon" alt="" />
            <p className="botnav-btn-name">생&nbsp;&nbsp;활</p>
          </Link>
        </li>
        <li>
          <Link to={'/home'} className="botnav-btn">
            <img src="/icons/botnav-icon8.png" className="botnav-btn-icon" alt="" />
            <p className="botnav-btn-name">이&nbsp;&nbsp;사</p>
          </Link>
        </li>
        <li>
          <Link to={'/home'} className="botnav-btn">
            <img src="/icons/botnav-icon10.png" className="botnav-btn-icon" alt="" />
            <p className="botnav-btn-name">나의 정보</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}