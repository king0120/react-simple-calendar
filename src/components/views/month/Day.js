import React from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'

const DayStyle = styled.div`
  width: calc(80vw/7);
  height: calc(calc(80vw/7) * 1.25);
  border: 1px solid black;
`

const DateHeader = styled.div`
  padding: 5px;
  text-align: right;
  font-size: 1.6vw;
`

const Day = ({ day }) => {
  return (
    <DayStyle>
      <DateHeader>{format(day, 'Do')}</DateHeader>
    </DayStyle>
  )
}

export default Day
