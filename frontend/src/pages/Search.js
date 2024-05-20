import React, { useState } from 'react';
import './pagestyle/Search.scss';

// Components
import Boardbar from 'components/SearchBar/SearchBar';
import EventList from 'components/EventList/EventList';
import EventInfo from 'components/EventInfo/EventInfo';
import { useAuth } from 'hooks/useAuth';

export const Search = () => {
  const [queryParams, setQueryParams] = useState({
    startTime: '',
    endTime: '',
    location: '',
    title: '',
    status: 'upcoming'
  });

  const handleSearch = (newParams) => {
    setQueryParams(newParams);
  };

  return (
    <div className="search-page-wrapper">
      <Boardbar onSearch={handleSearch} />
      <div className="search-result-wrapper">
        <div className="event-list-container-wrapper">
          <EventList queryParams={queryParams} />
        </div>
        <div className="event-info-wrapper">
          <EventInfo />
        </div>
      </div>
    </div>
  );
};

export default Search;
