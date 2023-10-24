import React, { useState } from "react";
//import ReactCalendar from "react-calendar";
import { Whisper, Popover, Badge } from "rsuite";
import CalendarR from "rsuite/Calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../../components/Header";
import {
  Card,
  ContainerPage,
  CalendarBody,
  CalendarContainer,
  CalendarHeader,
  DayCell,
  EventMarker,
  Title,
} from "./styles";

function getTodoList(date) {
  const day = date.getDate();

  switch (day) {
    case 28:
      return [
        { time: "14:00 pm", title: "NEXT - FIAP" },
      ];
    case 15:
      return [
        { time: "09:30 pm", title: "Products Introduction Meeting" },
        { time: "12:30 pm", title: "Client entertaining" },
        { time: "02:00 pm", title: "Product design discussion" },
        { time: "05:00 pm", title: "Product test and acceptance" },
        { time: "06:30 pm", title: "Reporting" },
        { time: "10:00 pm", title: "Going home to walk the dog" },
      ];
    default:
      return [];
  }
}

const Calendar = () => {
  function renderCell(date) {
    const list = getTodoList(date);
    const displayList = list.filter((item, index) => index < 2);

    if (list.length) {
      const moreCount = list.length - displayList.length;
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {list.map((item, index) => (
                  <p key={index}>
                    <b>{item.time}</b> - {item.title}
                  </p>
                ))}
              </Popover>
            }
          >
            <a>{moreCount} more</a>
          </Whisper>
        </li>
      );

      return (
        <ul className="calendar-todo-list">
          {displayList.map((item, index) => (
            <li key={index}>
              <Badge color="green" /> <b>{item.time}</b> - {item.title}
            </li>
          ))}
          {moreCount ? moreItem : null}
        </ul>
      );
    }
    return null;
  }

  return (
    <ContainerPage>
      <Header />
      <Card>
        <Title>Calendário de Eventos</Title>
        <CalendarR
          
          renderCell={renderCell}
          locale={{
            sunday: "Domingo",
            monday: "Segunda",
            tuesday: "Terça",
            wednesday: "Quarta",
            thursday: "Quinta",
            friday: "Sexta",   
          saturday:"Sábado"
          }}
        />
      </Card>
    </ContainerPage>
  );
};
export default Calendar;
