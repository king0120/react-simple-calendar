import React from 'react'
import { Button } from 'semantic-ui-react'
const CalendarViewButtons = () => {
  return (
    <Button.Group>
      <Button>
        Day
      </Button>
      <Button>
        Week
      </Button>
      <Button active>
        Month
      </Button>
      <Button>
        Year
      </Button>
    </Button.Group>
  )
};

export default CalendarViewButtons
