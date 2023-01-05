import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const HeaderDayTime = styled.div`
  font-size: 24px;
  padding: 20px;
  text-align: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
    width: 100px;
    height: 4px;
    border-radius: 50%;
    background-color: tomato;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    &::after {
      width: 250px;
      height: 2px;
      border-radius: 40%;
    }
  }
`;

const rotateAni = keyframes`
  0% {
    transform-origin: 0 100%;
    transform: rotate(-55deg);
  }
  50% {
    transform-origin: 0 100%;
    transform: rotate(0deg);
  }
  100% {
    transform-origin: 0 100%;
    transform: rotate(55deg);
  }
`;
const Rotate = styled.span`
  display: inline-block;
  width: 3px;
  height: 20px;
  background-color: black;
  margin-left: 30px;
  border-radius: 50% 50% 10% 10%;
  animation: ${rotateAni} 1s linear alternate infinite;
`;

function Header() {
  const [dayTime, setDayTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDayTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <HeaderDayTime>
        {dayTime.toLocaleString("ko", {
          weekday: "narrow",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })}
        <Rotate />
      </HeaderDayTime>
    </div>
  );
}

export default Header;
