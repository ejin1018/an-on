import { useEffect,useState,useRef } from "react";
import axios from "axios";
import { API_URL } from "../config/url"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction from "@fullcalendar/interaction";

// {"myEvents":[{"title": "관리비 정산", "date": "2023-07-10"},{"title": "입주 청소", "date": "2023-07-13"}]}
export default function MyCalendar(props){

  const userEvents = [];
  const calendar = useRef();

  const clicked = (info)=>{
    let clickedNew = prompt('일정을 등록하세요');
    let clickedDate = info.dateStr;

    if(clickedNew != '' && clickedNew != null){
      calendar.current.props.events.push({'title':clickedNew,'date':clickedDate});
      info.dayEl.style.backgroundColor='wheat';
      return userEvents;
    }else{
      alert('일정이 입력되지 않았습니다')
    }
    return;
  }

  return(
    <>
      <FullCalendar 
        ref={calendar}
        plugins={[ dayGridPlugin,interaction ]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        locale={'ko'}
        headerToolbar={false}
        height={'auto'}
        eventColor={'#67937B'}
        events={[{"title": "관리비 정산", "date": "2023-07-10"},{"title": "입주 청소", "date": "2023-07-13"}]}
        // dateClick={clicked}
      />
    </>
  )
}