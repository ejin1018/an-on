import React, { useRef, useState } from "react";
import {Link} from "react-router-dom"
import BotNav from "../components/BotNav";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function Home(){
  return(
    <div>
      <BotNav />
      <section className="intro">
        <div className="intro-inner">
          <p className="intro-sub-title">원인 모를 고장, 미루게 되는 교체 ...</p>
          <h2 className="title">더 이상 집에서 일어나는 문제에 스트레스 받지 마세요!</h2>
        </div>
        <Swiper
          slidesPerView={1.5}
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
            <SwiperSlide>
              <div className="offer-company">
                <p className="offer-company-name">다자바</p>
                <p className="offer-company-info">서울,경기 | 최소 견적 13만원 ~</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="offer-company">
                <p className="offer-company-name">다자바</p>
                <p className="offer-company-info">서울,경기 | 최소 견적 13만원 ~</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="offer-company">
                <p className="offer-company-name">다자바</p>
                <p className="offer-company-info">서울,경기 | 최소 견적 13만원 ~</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="offer-company">
                <p className="offer-company-name">다자바</p>
                <p className="offer-company-info">서울,경기 | 최소 견적 13만원 ~</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  )
}