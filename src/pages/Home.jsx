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
        <h2 className="hidden">더 이상 집에서 일어나는 문제에 스트레스 받지 마세요!</h2>
        <div className="intro-inner">
          <p className="intro-sub-title">원인 모를 고장, 미루게 되는 교체 ...</p>
          <p className="intro-title">더 이상 집에서 일어나는 문제에 스트레스 받지 마세요!</p>
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
    </div>
  )
}