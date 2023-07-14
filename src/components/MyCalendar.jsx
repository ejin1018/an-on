import { useEffect,useState } from "react";
import axios from "axios";
import { API_URL } from "../config/url"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction from "@fullcalendar/interaction";

export default function MyCalendar(props){
  const [addingEvent,setAddingEvent]=useState();
  useEffect(()=>{
    axios.get(`${API_URL}/anonuser/${props.user.id}`).then((succ)=>{
      setAddingEvent(succ.data.anonUser)
    })
  })
  // 문제1) test 계정은 기본 데이터가 저장되어있지만 새로 회원가입하는 사람은 null 인 상태
  // 등록 시 모두 null 이라고 가정하고 json 기본 형태로 데이터를 추가...?
  // 아예 null 이면 [{이벤트1},{이벤트2}] 하면 되는거 아닌가...? ㄴㄴ json 형태이기는 해야 ...
  // 문제2) 그리고 이벤트가 등록되면 캘린더에 바로 등록이 되어야 함 
  // userEvents 를 해당 회원의 id 로 axios 로 get 해서 불러오면 어떠려나..?
  // props.user.id 로 axios.get 이거를 useEffect update 될 때마다 

  const userEventsInit = {"myEvents":[{"title": "관리비 정산", "date": "2023-07-10"},{"title": "입주 청소", "date": "2023-07-13"}]}
  // const userEvents = JSON.parse(props.user.calendar)
  // 에러) null 이라서 json.parse가 불가능함
  const userEvents = props.user.calendar
  
  const [calCondition, setCalCondition] = useState(false);
  useEffect(()=>{
    // 문제2 해결중) 이벤트를 등록 할 때마다 실행되긴 함 
    // console.log('🪿🪿🪿')
  },[calCondition])
  
  const clicked = (info)=>{
    let clickedNew = prompt('일정을 등록하세요');
    let clickedDate = info.dateStr;

    if(clickedNew != '' && clickedNew != null){
      if(userEvents === null || userEvents === ''){
        // 기존 calendar 데이터가 없으면
        axios.post(`${API_URL}/anonuser/${props.user.id}`,{
          calendar:'{"myEvents":[{title: '+clickedNew+', date:'+ clickedDate+'}]}',
          id:props.user.id
        })
        return;
      }else if(userEvents.length > 0){
        console.log('등록된 데이터 있음',addingEvent.calendar)
      }
      // if(props.user.calendar != null || props.user.calendar != ''){
      //   // 문제1 해결중) 기존 데이터가 있는 test 계정의 경우
      //   // JSON.parse(userEvents).myEvents.push({title: clickedNew, date: clickedDate})
      //   // userEvents.myEvents.push({title: clickedNew, date: clickedDate})
      // }else{
      //   // 문제1 해결중) 데이터가 아예 없는 null의 최초 일정 등록
      //   // 이러면 일정 하나는 이렇게 등록이 되고 하나 더 등록하면 추가가 아니라 수정이 됨
      // }
      info.dayEl.style.backgroundColor='wheat';
      setCalCondition(true);
    }else{
      alert('일정이 입력되지 않았습니다')
      setCalCondition(false);
    }
    return;
  }

  return(
    <>
      <FullCalendar 
        plugins={[ dayGridPlugin,interaction ]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        locale={'ko'}
        headerToolbar={false}
        height={'auto'}
        eventColor={'#67937B'}
        events={!props.user.calendar?userEventsInit.myEvents:userEvents}
        dateClick={clicked}
      />
    </>
  )
}