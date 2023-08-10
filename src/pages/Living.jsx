import React from "react";
import { Link } from "react-router-dom";
import BotNav from "../components/BotNav"

export default function Living(){
  return(
    <div className="living">
      <BotNav />
      <div className="living-inner">
        <Link to={'/living'} className="living-point living-point-silicon">
          <div className="living-point-text">
            <p className="category">안온 리빙</p>
            <p className="name">너무 쉬운 실리콘</p>
            <p className="what">실리콘 종류, 활용, 제거, 깔끔하게 쏘는 팁까지</p>
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
          <p className="living-title">플랜테리어 시작하기</p>
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
        <div className="living-shop">
          <p className="living-title">이중 잠금 장치</p>
          <ul className="living-product">
            <li>
              <Link to={'/living'}>
                <img src="/images/door-lock1.png" alt="" />
                <p className="living-product-brand">똑딱박사</p>
                <p className="living-product-name">&#91;리뷰 56,000개&#93; 걸쇠형 잠금장치</p>
                <p className="living-product-price"><b>32%</b>7,200 원</p>
                <p className="living-product-badge living-product-badge-free">무료배송</p>
              </Link>
            </li>
            <li>
              <Link to={'/living'}>
                <img src="/images/door-lock2.png" alt="" />
                <p className="living-product-brand">똑딱박사</p>
                <p className="living-product-name">&#91;이중마개증정&#93; 체인형 잠금장치 3가지 색상</p>
                <p className="living-product-price"><b>24%</b>5,200 원</p>
                <p className="living-product-badge living-product-badge-sale">하루특가</p>
              </Link>
            </li>
            <li>
              <Link to={'/living'}>
                <img src="/images/door-lock3.png" alt="" />
                <p className="living-product-brand">문고리천만개</p>
                <p className="living-product-name">&#91;셀프인테리어 끝판왕&#93; 모던 심플 문 손잡이 24가지 색상</p>
                <p className="living-product-price"><b>54%</b>9,800 원</p>
                <p className="living-product-badge living-product-badge-free">무료배송</p>
              </Link>
            </li>
            <li>
              <Link to={'/living'}>
                <img src="/images/door-lock4.png" alt="" />
                <p className="living-product-brand">슈퍼안전맨</p>
                <p className="living-product-name">&#91;안심숙박&#93; 숙박시설 튼튼 사생활 보호 잠금 | 틱톡유행</p>
                <p className="living-product-price"><b>40%</b>3,800 원</p>
                <p className="living-product-badge living-product-badge-free">무료배송</p>
                <p className="living-product-badge living-product-badge-sale">하루특가</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}