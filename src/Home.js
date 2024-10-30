import React from 'react'
import Feet from './Feet'
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext)
  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading Posts...</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{color: 'red'}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feet posts={searchResults}/> : <p className='statusMsg'>No Posts to display.</p>)}
    </main>
  )
}

export default Home