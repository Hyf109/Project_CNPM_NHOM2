import React from 'react'
import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns'
import { getDay } from 'date-fns'
import clsx from 'clsx'
import { isToday } from 'date-fns'
import { useMemo } from 'react'
import UserEvents from 'components/UserProfile/UserProfile/Events/UserEvents'

import './pagestyle/Schedule.scss'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Schedule = ({ events }) => {
  const currentDate = new Date()
  const firstDayOfMonth = startOfMonth(currentDate)
  const lastDayOfMonth = endOfMonth(currentDate)

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth
  })

  const startingDayIndex = getDay(firstDayOfMonth)

  const eventsByDate = useMemo(() => {
    return events.reduce((acc, event) => {
      const dateKey = format(event.date, "yyyy-MM-dd")
      if (!acc[dateKey]) {
        acc[dateKey] = []
      }
      acc[dateKey].push(event)
      return acc
    }, {})
  }, [events])

  return (
    <>
      <div className='user-event-management'>

        <h1><li className="ev">Events now</li></h1>

        <UserEvents />

        <h1><li className="ev">Events then</li></h1>

        <UserEvents />
      </div>

      <div className='schedule-container'>
        <h1><li className="schedule">User Schedule</li></h1>
        <div>
          <h1 className='current-month'>{format(currentDate, 'MMMM yyyy')}</h1>
        </div>
        <div className='calendar-dates'>
          {WEEKDAYS.map((day) => {
            return <div key={day} className='days-in-week'>{day}</div>
          })}

          {Array.from({ length: startingDayIndex }).map((_, index) => {
            return <div key={`empty-${index}`} className='day-ord' />
          })}

          {daysInMonth.map((day, index) => {
            const dateKey = format(day, 'yyyy-MM-dd')
            const todaysEvent = eventsByDate[dateKey] || []
            return <div key={index} className={clsx('day-ord', { "to-day": isToday(day) })} >
              {format(day, 'd')}
              {todaysEvent.map((event) => {
                return <div key={event.title} className='event-title'>{event.title}</div>
              })}
            </div>
          })}
        </div>
      </div>
    </>
  )
}


export default Schedule;
