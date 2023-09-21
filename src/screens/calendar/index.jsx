import React, { useState } from "react";
import ReactCalendar from "react-calendar";
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

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const initialEvents = [
    { date: 10, description: "Innovation" },
    { date: 28, description: "Digital Talk" },
    { date: 20, description: "Live" },
  ];
  const [events, setEvents] = useState(initialEvents);

  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const calendarCells = [];
  const handleDateClick = (date) => {
    const eventDescription = window.prompt(
      "Adicione um evento para esta data:"
    );
    if (eventDescription) {
      const newEvent = { date, description: eventDescription };
      setEvents([...events, newEvent]);
    }
  };
  for (let i = 1; i <= 31; i++) {
    const eventForDate = events.find((event) => event.date === i);

    calendarCells.push(
      <DayCell
        key={i}
        onClick={() => handleDateClick(i)}
        style={{
          backgroundColor: selectedDate === i ? "#007bff" : "transparent",
          color: selectedDate === i ? "white" : "inherit",
        }}
      >
        {i}
        {eventForDate && <EventMarker>{eventForDate.description}</EventMarker>}
      </DayCell>
    );
  }

  return (
    <ContainerPage>
      <Header />
      <Card>
        <Title>Calendário de Eventos</Title>
        <CalendarContainer>
          <CalendarHeader>Setembro 2023</CalendarHeader>
          <CalendarBody>
            {weekdays.map((day) => (
              <DayCell key={day}>{day}</DayCell>
            ))}
            {calendarCells}
          </CalendarBody>
        </CalendarContainer>
      </Card>
    </ContainerPage>
  );
};
export default Calendar;
