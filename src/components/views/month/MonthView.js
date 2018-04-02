import React from 'react'
import styled from 'styled-components'
import Day from './Day'
import { CalFlex, DayStyle } from '../../styled/calendar-styles'

const MonthView = ({ dayOfWeek, month }) => {
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
}

export default MonthView
