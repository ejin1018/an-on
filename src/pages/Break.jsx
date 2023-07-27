import React, { useEffect, useState } from "react";
import BotNav from "../components/BotNav";

const breakBoiler = ['경서나비엔','림나이','두꺼비','소성셀틱','예스라인'];
const breakWhere = ['서울','경기','강원','충청','전라','경상'];

export default function Break(){
  const breakWhatFn = ()=>{
    console.log('select 변경')
  }

  const [breakOn,setBreakOn]=useState(false);
  useEffect(()=>{
    setBreakOn(true)
  },[])
  return(
    <div className="break">
      <BotNav />
      <div className={breakOn?'break-inner-on break-inner':'break-inner'}>
        <h3 className="section-title">무엇이 고장났나요?</h3>
        <select 
          name="break-what" 
          className="break-what" 
          id="break-what-list"
          onChange={breakWhatFn}
        >
          <option value="boiler">보일러</option>
          <option value="lamp">전등</option>
          <option value="water supply">수도</option>
          <option value="appliances">가전</option>
        </select>
        {/* <select name="">
          <option value=""></option>
        </select> */}
        {/* <form action="get">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>접수하기</button>
        </form> */}
      </div>
    </div>
  )
}