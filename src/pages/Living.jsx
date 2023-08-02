import React from "react";
import { Link } from "react-router-dom";

export default function Living(){
  return(
    <div className="living">
      <div className="living-inner">
        <Link to={'/living'} className="living-point living-point-silicon">
          <div className="living-point-text">
            <p className="category">안온 리빙</p>
            <p className="name">너무 쉬운 실리콘</p>
            <p className="what">실리콘 종류, 실리콘 건, 활용법, 깔끔하게 쏘는 팁까지</p>
          </div>
        </Link>
        <Link to={'/living'} className="living-point living-point-wood">
          <div className="living-point-text">
            <p className="category">안온 리빙</p>
            <p className="name">벽지만으로는 부족해</p>
            <p className="what">목재 패널, 허리 몰딩으로 간단하게 시공하기</p>
          </div>
        </Link>
        <div className="living-special">
          <p className="living-special-title">플랜테리어 시작하기</p>
          <div className="living-special-blocks">
            <Link to={'/living'} className='special-block'>
              <img src="/images/living-special1.png" alt="" />
              <p><b>식집사 입문</b> 키우기 쉬운 식물 추천</p>
            </Link>
            <Link to={'/living'} className='special-block'>
              <img src="/images/living-special2.png" alt="" />
              <p><b>모두모두 식집사</b> 진짜 식물이 부담이라면</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}