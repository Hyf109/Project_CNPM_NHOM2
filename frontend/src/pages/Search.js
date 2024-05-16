import * as React from 'react'
import '../App.scss'


//components
import Boardbar from 'components/HomePage/Board/Boardbar'
import Events from 'components/HomePage/Events/Events'

export const Search = () => {
  return (
    <>
      <Boardbar />
      <Events />
    </>
  )
}

export default Search