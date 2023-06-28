import React, { useRef, useState } from "react";
import {Link} from "react-router-dom"
import BotNav from "../components/BotNav";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const offerInfos = [
  {
    imgUrl:'/images/offer-img1.png',
    companyName:'다자바',
    companyInfo:'서울,경기 | 최소 견적 13만원 ~'
  },
  {
    imgUrl:'/images/offer-img2.png',
    companyName:'벌레싹싹',
    companyInfo:'서울,경기,강원 | 최소 견적 17만원 ~'
  },
  {
    imgUrl:'/images/offer-img3.png',
    companyName:'자바주소',
    companyInfo:'충남,전라 | 최소 견적 11만원 ~'
  },
  {
    imgUrl:'/images/offer-img4.png',
    companyName:'포세이프존',
    companyInfo:'전국 | 최소 견적 16만원 ~'
  },
]

export default function Home(){
  return(
    <div>
      <BotNav />
      <section className="intro">
        <div className="intro-container">
          <p className="intro-subtitle">원인 모를 고장, 미루게 되는 교체 ...</p>
          <h2 className="title">더 이상 집에서 일어나는 문제에 스트레스 받지 마세요!</h2>
        </div>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="service-slide"
        >
          <SwiperSlide>
            <div className="service">
              <p className="service-title">보일러 고장</p>
              <Link to={'/home'} className="service-receipt">고장 접수하기</Link>
              <div className="service-icon service-icon-vert">
                <img src="/icons/service-icon1.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service">
              <p className="service-title">수도 고장</p>
              <Link to={'/home'} className="service-receipt">고장 접수하기</Link>
              <div className="service-icon service-icon-rect">
                <img src="/icons/service-icon2.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service">
              <p className="service-title">전기 고장</p>
              <Link to={'/home'} className="service-receipt">고장 접수하기</Link>
              <div className="service-icon service-icon-rect">
                <img src="/icons/service-icon3.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="offer">
        <div className="offer-inner">
          <h2 className="section-title">다가오는 여름, 벌레와의 전쟁</h2>
          <h3 className="section-subtitle">안온이 추천드리는 <b>해충 방역 업체</b></h3>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={18}
            className="offer-slide"
          >
            {offerInfos.map((value,idx)=>{
              const slideSt = {background:`no-repeat center center /cover url(${offerInfos[idx].imgUrl})`}
              return(
                <SwiperSlide style={slideSt} key={idx}>
                  <div className="offer-company">
                    <p className="offer-company-name">{value.companyName}</p>
                    <p className="offer-company-info">{value.companyInfo}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
      <section className="check">
        <div className="check-inner">
          <div className="check-left">
            <h2 className="section-title">이사 절차<br/>한 눈에 보기</h2>
            <h3 className="section-subtitle"><b>이사 체크리스트</b>를 작성해보세요</h3>
          </div>
          <ul className="check-list">
            <li>
              <p>요금 정산</p>
            </li>
            <li>
              <p>입주 청소</p>
            </li>
            <li className="check-list-off">
              <p>업체 예약</p>
            </li>
            <li className="check-list-off">
              <p>파손 확인</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="suggest">
        <div className="suggest-inner">
          <h2 className="section-title">불안한 마음이 든다면</h2>
          <h3 className="section-subtitle"><b>이중 잠금 장치</b>를 알아보세요</h3>
          <Link to={'/home'} className="suggest-reserve">설치 예약하기</Link>
          <ul className="suggest-items">
            <li>
              <Link to={'/home'}>
                <div className="suggest-img-wrap">
                  <img src="/images/door-lock1.jpg" alt="" />
                </div>
                <p className="suggest-items-name">기본형</p>
              </Link>
            </li>
            <li>
              <Link to={'/home'}>
                <div className="suggest-img-wrap">
                  <img src="/images/door-lock2.jpg" alt="" />
                </div>
                <p className="suggest-items-name">체인형</p>
              </Link>
            </li>
            <li>
              <Link to={'/home'}>
                <div className="suggest-img-wrap">
                  <img src="/images/door-lock3.jpg" alt="" />
                </div>
                <p className="suggest-items-name">보조잠금</p>
              </Link>
            </li>
            <li>
              <Link to={'/home'}>
                <div className="suggest-img-wrap">
                  <img src="/images/door-lock4.jpg" alt="" />
                </div>
                <p className="suggest-items-name">기타</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="master">
        <div className="master-inner">
          <h2 className="section-title">우리 동네 설치 기사님 찾아보기</h2>
          <ul className="master-list">
            <li>
              <Link to={'/home'}>
                <div className="master-img-wrap">
                  <img src="/images/master-img1.png" alt="" />
                </div>
                <p className="master-name">이혜선 기사님</p>
                <p className="master-star">4.8 점</p>
              </Link>
            </li>
            <li>
              <Link to={'/home'}>
                <div className="master-img-wrap">
                  <img src="/images/master-img2.png" alt="" />
                </div>
                <p className="master-name">김광수 기사님</p>
                <p className="master-star">4.9 점</p>
              </Link>
            </li>
            <li>
              <Link to={'/home'}>
                <div className="master-img-wrap">
                  <img src="/images/master-img3.png" alt="" />
                </div>
                <p className="master-name">윤현기 기사님</p>
                <p className="master-star">4.6 점</p>
              </Link>
            </li>
            <li>
              <Link to={'/home'}>
                <div className="master-img-wrap">
                  <img src="/images/master-img4.png" alt="" />
                </div>
                <p className="master-name">김아름 기사님</p>
                <p className="master-star">4.6 점</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}