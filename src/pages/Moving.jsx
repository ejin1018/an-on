import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../config/url"
import BotNav from "../components/BotNav";
import Login from "./Login";

export default function Moving(){
  const userId = useSelector(state => state.id);
  const userEmail = useSelector(state => state.email);
  const [userInfo,setUserInfo] = useState('');
  const [movingForm,setMovingForm] = useState(false);

  const getUserInfo = ()=>{
    axios.get(`${API_URL}/anonuser/${userId}`).then((userInfo)=>{
      setUserInfo(userInfo.data.anonUser)
    }).catch((err)=>{
      console.log('회원 조회 실패', err)
    })
  }

  useEffect(()=>{
    getUserInfo()
  },[])
  useEffect(()=>{
    getUserInfo()
  },[userInfo])

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
  const movingdaySubmitFn = (e)=>{
    e.preventDefault();
    setMovingForm(false);
    axios.post(`${API_URL}/anonuser/${userId}`,{
      movingday:`${form.year}년 ${form.month}월 ${e.target[2].value}일`
    }).then((result)=>{
      console.log('이삿날 등록 성공',result)
    }).catch((err)=>{
      console.log('이삿날 등록 실패',err)
    })
  }

  return(
    <>
    {
      userEmail === null?
      <Login />
      :
      <div className="moving">
        <BotNav />
          {/* 회원 개인 정보에 movingDay 데이터가 비어있으면 my-moving-day 팝업 */}
          {/* <p> 오늘 getDate 랑 계산해서 d- 남았습니다 보여주기</p> */}
          <section className="my-moving">
            <div className="my-moving-day">
              <h3 className="section-title">나의 이삿날은</h3>
              <div className="my-moving-day-text">
                {userInfo.movingday == null?
                  <p>아직 등록되지 않았습니다</p>
                :
                  <p>{userInfo.movingday}</p>
                }
                <button 
                  className={movingForm?`btn-moddifing btn-just`:`btn-just`}
                  onClick={()=>{!movingForm?setMovingForm(true):setMovingForm(false)}} />
              </div>
            </div>
            {movingForm &&
              <form
                method="get" 
                className="moving-date-form"
                onSubmit={movingdaySubmitFn}
              >
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
                  defaultValue={monthList[today.getMonth()].eng}
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
                  defaultValue={today.getDate()}
                >
                  {dayList.map((value)=>{
                    return(
                      <option value={value} key={value}>{value}일</option>
                    )
                  })}
                </select>
                {
                  userInfo.movingday == null?
                  <button type="submit">등록하기</button>
                  :
                  <button type="submit">변경하기</button>
                }
              </form>
            }
          </section>
          <section className="moving-check">
            <h3>요금 납부</h3>
            <form action="" method="get">
              <input type="text" />
              <button type="submit">등록</button>
            </form>
            <ul className="moving-check-list">
              <li>
                <label>
                  <input type="checkbox" name="" id="" /> 주차비
                </label>
              </li>
            </ul>
          </section>
      </div>
    }
    </>
  )
}