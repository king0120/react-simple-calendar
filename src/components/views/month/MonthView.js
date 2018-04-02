import React from 'react'
import styled from 'styled-components'
import Day from './Day'

const CalFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  margin: 0 auto;
`

const DayStyle = styled.div`
  width: calc(80vw/7);
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 10px;
`

const MonthView = ({dayOfWeek, month}) => {
  return (
    <CalFlex>
      {dayOfWeek.map((day, i) => (
        <DayStyle key={i}>
          {day}
        </DayStyle>
      ))}
      {month.map((day, i) => (
        <Day day={day} key={i}/>
      ))}
    </CalFlex>
  )
};

export default MonthView
