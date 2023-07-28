import React, { useEffect, useRef, useState } from "react";
import BotNav from "../components/BotNav";

const breakWhere = ['지역','서울','경기','강원','충청','전라','경상'];
const breakBoiler = ['브랜드','경서나비엔','림나이','두꺼비','소성셀틱','예스라인'];

export default function Break(){
  const submitBtn = useRef();
  const breakNext = useRef();
  const [breakOn,setBreakOn] = useState(false);
  const [boilerBrand,setBoilerBrand] = useState(false);
  const [fixLocation,setFixLocation] = useState(false);
  const [mappingThis, setMappingThis] = useState([]);
  const [submitThing,setSubmitThing] = useState([]);
  
  useEffect(()=>{
    setBreakOn(true)
  },[])

  const breakWhatFn = (e)=>{
    switch(e.target.value){
      case 'nothing':
        setBoilerBrand(false);
        setFixLocation(false);
        break;
      case 'boiler' :
        setBoilerBrand(true);
        setMappingThis(breakBoiler);
        setFixLocation(false);
        break;
      case 'lamp':
      case 'water':
      case 'appliances':
        setBoilerBrand(false);
        setFixLocation(true);
        setMappingThis(breakWhere);
        break;
    }
  }

  const breakCheckDoneFn = ()=>{
    submitBtn.current.className = 'break-submit-btn break-submit-btn-on'
  }

  const breakSubmitFn = (e)=>{
    e.preventDefault();
    console.log(e)
    breakNext.current.className = 'break-next break-next-on'
    setSubmitThing([e.target[0].value,e.target[1].value])
  }
  
  const beforeBtnFn = ()=>{
    breakNext.current.className = 'break-next'
  }

  return(
    <div className="break">
      <BotNav />
      <div className={breakOn?'break-inner-on break-inner':'break-inner'}>
        <h3 className="section-title">무엇이 고장났나요?</h3>
        <form action="get" onSubmit={breakSubmitFn}>
          <select 
            name="break-what" 
            className="break-one-depth" 
            id="break-what-list"
            onChange={breakWhatFn}
          >
            <option value="nothing">선택하기</option>
            <option value="boiler">보일러</option>
            <option value="lamp">전등</option>
            <option value="water">수도</option>
            <option value="appliances">가전</option>
          </select>
          <select 
            name="break-boiler" 
            className={boilerBrand || fixLocation ?"break-two-depth break-two-depth-on":"break-two-depth" }
            onChange={breakCheckDoneFn}
          >
            { mappingThis.map((value,idx)=>{
              return(
                <option value={value} key={idx}>{value}</option>
              )
            })}
          </select>
          <button type="submit" ref={submitBtn} className="break-submit-btn">다음</button>
        </form>
      </div>
      <div ref={breakNext} className="break-next">
        <div className="break-next-inner">
          <p>{submitThing[0]}</p>
          <p>{submitThing[1]}</p>
          <textarea name="break-detail-content" id="break-what-detail" cols="30" rows="10" ></textarea>
          <button onClick={beforeBtnFn}>이전</button>
        </div>
      </div>
    </div>
  )
}