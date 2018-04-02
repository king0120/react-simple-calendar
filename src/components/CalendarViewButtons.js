import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

const CalendarButton = ({ measurement, pathname }) => (
  <Button as={Link} to={`/${measurement}`} active={pathname === `/${measurement}`}>
    {measurement.toUpperCase()}
  </Button>
)
const CalendarViewButtons = (props) => {
  return (
    <Button.Group>
      <CalendarButton measurement='day' pathname={props.location.pathname}/>
      <CalendarButton measurement='week' pathname={props.location.pathname} />
      <CalendarButton measurement='month' pathname={props.location.pathname} />
      <CalendarButton measurement='year' pathname={props.location.pathname} />
    </Button.Group>
  )
}

export default withRouter(CalendarViewButtons)
