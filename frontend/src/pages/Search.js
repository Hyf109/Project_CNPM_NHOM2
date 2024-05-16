import * as React from 'react'
import '../App.scss'


//components
import Appbar from 'components/HeaderOnly/Header'
import Contents from 'components/HomePage/Contents/Contents'
import Footer from 'components/HomePage/Footer/Footer'

export const Search = () => {
  return (
    <>
      <Appbar />

      <Contents/>
    </>
  )
}

export default Search