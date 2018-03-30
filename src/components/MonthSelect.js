import React from 'react'
import format from 'date-fns/format'
import { Button, Icon } from 'semantic-ui-react'

const MonthSelect = ({ lastMonth, nextMonth, today }) => (
  <Button.Group>
    <Button onClick={lastMonth}>
      <Icon name='chevron left' />
    </Button>
    <Button onClick={today}>{format(new Date(), 'ddd, MMMM Do')}</Button>
    <Button onClick={nextMonth}>
      <Icon name='chevron right' />
    </Button>
  </Button.Group>
)

export default MonthSelect
