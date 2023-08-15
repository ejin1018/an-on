import { useEffect,useState } from "react";
import BotNav from "../components/BotNav";

export default function Moving(){
  const today = new Date();
  const standYear = Number(today.getFullYear());
  const [form,setForm] = useState({
    year: Number(today.getFullYear()),
    month: Number(today.getMonth())+1,
    day: Number(today.getDate())
  })

  const yearList = [];
  for(let y=standYear; y<= standYear+3; y++){
    yearList.push(y)
  }
  const changeYearFn = (e)=>{
    setForm({
      ...form,
      year: Number(e.target.value),
    })
  }
  
  const monthList = [];
  for(let i=0; i<12; i++){
    const monthSource = new Date(form.year,i,1)
    const engMonth = monthSource.toLocaleString("en-US",{month:"long"});
    monthList.push({eng:engMonth,num:i+1})
  }
  const changeMonthFn = (e)=>{
    setForm({
      ...form,
      month: Number(e.target.selectedIndex+1)
    })
  }

  const dayList = [];
  let maxDate = new Date(form.year, form.month,0).getDate();
  for(let d=1; d<=maxDate; d++){
    dayList.push(d)
  }
  const changeDayFn = (e)=>{
    setForm({
      ...form,
      day:Number(e.target.value)
    })
  }

  return(
    <div className="moving">
      <BotNav />
      <div className="moving-inner">
        <section className="my-moving-day">
          <h3 className="section-title">나의 이삿날은</h3>
          <select 
            name="moving-year" 
            id="moving-year-list"
            onChange={changeYearFn}
          >
            {yearList.map((value)=>{
              return(
                <option value={value} key={value}>{value}년</option>
              )
            })}
          </select>
          <select 
            name="moving-month" 
            id="moving-month-list"
            onChange={changeMonthFn}
          >
            {monthList.map((value)=>{
              return(
                <option value={value.eng} key={value.eng}>{value.num}월</option>
              )
            })}
          </select>
          <select 
            name="moving-day" 
            id="moving-day-list"
            onChange={changeDayFn}
          >
            {dayList.map((value)=>{
              return(
                <option value={value} key={value}>{value}일</option>
              )
            })}
          </select>
        </section>
        {/* <section className="moving-check">
          <h3>요금 납부</h3>
          <form action="" method="get">

          </form>
          <input type="text" />
          <ul className="moving-check-list">
            <li>
              <label>
                <input type="checkbox" name="" id="" /> 주차비
              </label>
            </li>
          </ul>
        </section> */}
        {/* <p> 오늘 getDate 랑 계산해서 d- 남았습니다 보여주기</p> */}
      </div>
    </div>
  )
}