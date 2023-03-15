import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import * as C from './styles'


function Question ({ title, info }) {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <C.Question>
      <C.Header>
        <h4>{title}</h4>
        <C.Button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </C.Button>
      </C.Header>
      {showInfo && <p>{info}</p>}
    </C.Question>
  )
}

export default Question
