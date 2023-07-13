import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction from "@fullcalendar/interaction";

const clicked = (info)=>{
  let clickedNew = prompt('일정을 등록하세요');
  let clickedDate = info.dateStr;
  // myEvents.push({title: clickedNew, date: clickedDate})
  // console.log(myEvents)
  console.log(info)
  info.dayEl.style.backgroundColor='red'
}
// 화면에 추가가 안 됨
// const myEvents = [
//   {title: '관리비 정산', date: '2023-07-10'},
//   {title: '입주 청소', date: '2023-07-13'},
// ]
export default function MyCalendar(props){
  console.log(props.calendar)
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
        events={props.calendar}
        dateClick={clicked}
      />
    </>
  )
}