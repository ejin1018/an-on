import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction from "@fullcalendar/interaction";

export default function MyCalendar(){
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
            eventDisplay={'block'}
            events={[
              {title: '관리비 정산', date: '2023-07-10'},
              {title: '입주 청소', date: '2023-07-13'},
            ]}
      />
    </>
  )
}