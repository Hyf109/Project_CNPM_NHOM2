import * as React from 'react'
import './pagestyle/Search.scss'


//components
import Boardbar from 'components/HomePage/Board/Boardbar'
import EventList from 'components/EventList/EventList'
import EventInfo from 'components/EventInfo/EventInfo'
import { useAuth } from 'hooks/useAuth'

export const Search = () => {
  

  return (
    <>
      
      <div className="search-page-wrapper">
        <Boardbar />
        <div className="search-result-wrapper">
          <div className="event-list-container-wrapper">
            <EventList />
          </div>
          <div className="event-info-wrapper">
            <EventInfo />
          </div>
        </div>
      </div>
    </>
  )
}

export default Search