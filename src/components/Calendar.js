import React, { Component } from 'react'
import addDays from 'date-fns/add_days'
import subDays from 'date-fns/sub_days'
import format from 'date-fns/format'
import styled from 'styled-components'
import Day from './Day'
import MonthSelect from './MonthSelect'
import CalendarViewButtons from './CalendarViewButtons'
import { Container } from 'semantic-ui-react'

const DayStyle = styled.div`
  width: calc(80vw/7);
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 10px;
`

const CalStyle = styled.div`
  width: 80vw;
  margin: 30px auto;
`

const CalFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  margin: 0 auto;
`

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3{
    font-size: 2rem;
  }
  p{
    font-size: 1.5rem;
  }
`

class Calendar extends Component {
  state = {
    today: new Date(),
    month: [],
    dayOfWeek: []
  }
  componentDidMount () {
    this.setMonth()
    this.setDayOfWeek()
  }

  setMonth = () => {
    const month = Array(28).fill().map((_, i) => {
      return addDays(this.state.today, i)
    })
    this.setState({ month })
  }

  setDayOfWeek = () => {
    const dayOfWeek = Array(7).fill().map((_, i) => {
      return format(addDays(this.state.today, i), 'dddd')
    })
    this.setState({ dayOfWeek })
  }

  lastMonth = async () => {
    await this.setState({ today: subDays(this.state.today, 28) })
    this.setMonth()
    this.setDayOfWeek()
  }

  nextMonth = async () => {
    await this.setState({ today: addDays(this.state.today, 28) })
    this.setMonth()
    this.setDayOfWeek()
  }

  today = async () => {
    await this.setState({ today: new Date() })
    this.setMonth()
    this.setDayOfWeek()
  }

  render () {
    return (
      <Container>
        <CalStyle>
          <HeadContainer>
            <div>
              <h3>{format(this.state.today, 'MMMM')}</h3>
              <p>{format(this.state.today, 'YYYY')}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <MonthSelect
                lastMonth={this.lastMonth}
                nextMonth={this.nextMonth}
                today={this.today}
              />
              <CalendarViewButtons />
            </div>
          </HeadContainer>

          <CalFlex>
            {this.state.dayOfWeek.map((day, i) => (
              <DayStyle key={i}>
                {day}
              </DayStyle>
            ))}
            {this.state.month.map((day, i) => (
              <Day day={day} key={i}/>
            ))}
          </CalFlex>
        </CalStyle>
      </Container>
    )
  }
}

export default Calendar
