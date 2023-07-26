import React from "react";
import BotNav from "../components/BotNav";

const breakBoiler = ['경서나비엔','림나이','두꺼비','소성셀틱','예스라인'];
const breakWhere = ['서울','경기','강원','충청','전라','경상'];

export default function Break(){
  return(
    <div className="break">
      <BotNav />
      <div className="break-inner">
        <h3 className="section-title">무엇이 고장났나요?</h3>
        <select name="break-what" id="break-what-list">
          <option value="boiler">보일러</option>
          <option value="lamp">전등</option>
          <option value="water supply">수도</option>
          <option value="appliances">가전</option>
        </select>
        {/* <select name="">
          <option value=""></option>
        </select> */}
      </div>
    </div>
  )
}