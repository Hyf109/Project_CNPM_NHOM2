import React, { useState, useEffect } from 'react';
import './pagestyle/Search.scss';

// Components
import Boardbar from 'components/SearchBar/SearchBar';
import EventList from 'components/EventList/EventList';
import EventInfo from 'components/EventInfo/EventInfo';
import { useAuth } from 'hooks/useAuth';
import useFetch from 'hooks/useFetch';

export const Search = () => {
  const [showEventInfo, setShowEventInfo] = useState(false);
  const [queryParams, setQueryParams] = useState({
    startTime: '',
    endTime: '',
    location: '',
    title: '',
    status: 'upcoming',
    event_id_list: []
  });

  const {data: manager, isPending, error} = useFetch('finder/api/event/manager');

  // Update event_id_list once manager data is loaded
  useEffect(() => {
    if (manager && manager.events) {
      setQueryParams(prevState => ({
        ...prevState,
        event_id_list: manager.events.map(event => event.event_id)
      }));
    }
  }, [manager]);

  const handleSearch = (newParams) => {
    setQueryParams(prevState => ({
      ...prevState,
      newParams
    }));
  };

  return (
    <div className="search-page-wrapper">
      <Boardbar onSearch={handleSearch} />
      <div className="search-result-wrapper">
        <div className="event-list-container-wrapper">
          <EventList queryParams={queryParams} onEventSelect={() => setShowEventInfo(true)} />
        </div>
        {showEventInfo && 
          <div className="search-event-info-view">
            <EventInfo onClose={() => setShowEventInfo(false)} />
          </div>
        }

      </div>
    </div>
  );
};

export default Search;
