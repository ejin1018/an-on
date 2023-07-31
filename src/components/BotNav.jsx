import React from "react";
import {Link, useMatch} from "react-router-dom"

export default function BotNav(){
  const matchHome = useMatch('/home');
  const matchBreak = useMatch('/break');
  const matchMypage = useMatch('/mypage');
  return(
    <nav className="botnav-wrap">
      <ul className="botnav-container">
        <li>
          <Link to={'/home'} className='botnav-btn'>
            {matchHome?
              <img src="/icons/botnav-home-fill.png" className="botnav-btn-icon" alt="" />
              :
              <img src="/icons/botnav-home-line.png" className="botnav-btn-icon" alt="" />
            }
            <p className="botnav-btn-name">홈</p>
          </Link>
        </li>
        <li>
          <Link to={'/break'} className="botnav-btn">
            {matchBreak?
              <img src="/icons/botnav-hamm-fill.png" className="botnav-btn-icon" alt="" />
              :
              <img src="/icons/botnav-hamm-line.png" className="botnav-btn-icon" alt="" />
            }
            <p className="botnav-btn-name">고&nbsp;&nbsp;장</p>
          </Link>
        </li>
        <li>
          <Link to={'/home'} className="botnav-btn">
            <img src="/icons/botnav-brush-line.png" className="botnav-btn-icon" alt="" />
            <p className="botnav-btn-name">생&nbsp;&nbsp;활</p>
          </Link>
        </li>
        <li>
          <Link to={'/home'} className="botnav-btn">
            <img src="/icons/botnav-move-line.png" className="botnav-btn-icon" alt="" />
            <p className="botnav-btn-name">이&nbsp;&nbsp;사</p>
          </Link>
        </li>
        <li>
          <Link to={'/mypage'} className="botnav-btn">
            {
              matchMypage?
              <img src="/icons/botnav-my-fill.png" className="botnav-btn-icon" alt="" />
              :
              <img src="/icons/botnav-my-line.png" className="botnav-btn-icon" alt="" />
            }
            <p className="botnav-btn-name">나의 정보</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}