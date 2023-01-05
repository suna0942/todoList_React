import styled, { css } from "styled-components";
import Calendar from "react-calendar";
import { useState } from "react";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./ShowCalendar.scss";

function ShowCalendar() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="calendarContainer">
      <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")} // 날짜 뒤에 '일' 제거
      />
    </div>
  );
}

export default ShowCalendar;
