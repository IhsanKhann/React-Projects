import { useState } from 'react'
import './App.css'
import MultiInputForm from './MultiInputForm'
// import Cart from './AvoidUseEffect';
import Student from './primitiveAndNonP';
import FetchingData from './FetchApi';

function App() {

  return (
    <>
      <MultiInputForm/>
      <Student/>
      <FetchingData/>
    </>
  )
}

export default App
