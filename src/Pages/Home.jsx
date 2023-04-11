import React from 'react'
import Index from '../Components/Index'
import Row from '../Components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
    <Index/>
    <Row RowID='1' title="Popular" fetchURL={requests.requestPopular} />
    <Row RowID='2' title="Trending" fetchURL={requests.requestTopTrending} />
    <Row RowID='3' title="Upcoming" fetchURL={requests.requestUpcoming} />
    <Row RowID='4' title="Top Rated" fetchURL={requests.requestTopRated} />
    
    </>
    
  )
}

export default Home