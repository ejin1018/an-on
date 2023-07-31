import React, { useEffect, useRef, useState } from "react";
import BotNav from "../components/BotNav";
import Modal from "../components/Modal";

const breakWhere = ['지역','서울','경기','강원','충청','전라','경상'];
const breakBoiler = ['브랜드','경서나비엔','림나이','두꺼비','소성셀틱','예스라인'];

export default function Break(){
  const submitBtn = useRef();
  const breakTitle = useRef();
  const breakDetail = useRef();
  const [boilerModal,setBoilerModal] = useState(false);
  const [locationModal,setLocationModal] = useState(false);
  const [breakOn,setBreakOn] = useState(false);
  const [boilerBrand,setBoilerBrand] = useState(false);
  const [fixLocation,setFixLocation] = useState(false);
  const [mappingThis, setMappingThis] = useState([]);
  
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
    breakTitle.current.className = 'section-title section-title-on'
    breakDetail.current.className = 'break-detail break-detail-on'
  }

  const breakDetailFn = ()=>{
    submitBtn.current.className = 'break-submit-btn break-submit-btn-on'
  }

  const breakSubmitFn = (e)=>{
    e.preventDefault();
    console.log(e.target[0].value)
    if(e.target[0].value === 'boiler'){
      setBoilerModal(true);
      setLocationModal(false);
    }else{
      setBoilerModal(false);
      setLocationModal(true);
    }
  }

  return(
    <div className="break">
      {boilerModal && <Modal msg={'해당 브랜드에 고장을 접수했습니다. \n 3-5일 내 브랜드에서 확인 후 기사님이 배정됩니다!'} modalWhere={'/home'} modalBtn={'접수 완료'}/>}
      {locationModal && <Modal msg={`해당 지역에 있는 기사님들께 고장을 접수했습니다. \n 3-5일 내 견적서가 도착합니다!`} modalWhere={'/home'} modalBtn={'접수 완료'}/>}
      <BotNav />
      <div className={breakOn?'break-inner-on break-inner':'break-inner'}>
        <h3 ref={breakTitle} className="section-title">무엇이 고장났나요?</h3>
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
          <div ref={breakDetail} className="break-detail">
            <p className="break-detail-suggest">증상을 자세하게 적어주세요</p>
            <textarea 
              name="break-detail-context" 
              id="break-datail-context" 
              cols="30" 
              rows="10"
              onChange={breakDetailFn}
            ></textarea>
          </div>
          <button type="submit" ref={submitBtn} className="break-submit-btn">고장 접수하기</button>
        </form>
      </div>
    </div>
  )
}