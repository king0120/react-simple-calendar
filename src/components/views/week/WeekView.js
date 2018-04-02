import React, { Component } from 'react'
import format from 'date-fns/format'
import styled from 'styled-components'
import getDay from 'date-fns/get_day'
import subDays from 'date-fns/sub_days'
import addDays from 'date-fns/add_days'
import { List } from 'semantic-ui-react'
import { CalFlex, DayStyle } from '../../styled/calendar-styles'

const ListItem = styled(List.Item)`
  height: 100px;
  .header {
    text-align: left;
    opacity: .55;
  }
`

class WeekView extends Component {
  state = {
    sunday: {},
    week: []
  }

  componentDidMount () {
    this.createWeek()
  }

  createWeek = () => {
    const sunday = findSunday(this.props.today)
    const week = Array(7).fill().map((day, index) => {
      return addDays(sunday, index)
    })
    this.setState({ sunday, week })
  }

  render () {
    console.log(this.props)
    return (
      <CalFlex>
        {
          this.state.week.map(day => {
            const formatDay = format(day, 'MMMM Do')
            return (
              <DayStyle key={formatDay}>
                <h1>{formatDay}</h1>
                <List divided relaxed>
                  {Array(24).fill().map((_, index) => {
                    return (
                      <ListItem key={index}>
                        <List.Content>
                          <List.Header>{index + 1}:00</List.Header>
                        </List.Content>
                      </ListItem>
                    )
                  })}
                </List>
              </DayStyle>
            )
          })
        }

      </CalFlex>
    )
  }
}

export default WeekView

const findSunday = (day) => {
  return getDay(day) !== 0
    ? findSunday(subDays(day, 1))
    : day
}
