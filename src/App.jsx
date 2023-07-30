import React from 'react'
import './App.css'
import Row from './Components/Row'
import requests from './request'

function App() {
  return (
    <div className='app'>
      <Row title='Netlifx original' fetchUrl={requests.fetchNetflixOriginals}/>
    </div>
  )
}

export default App

