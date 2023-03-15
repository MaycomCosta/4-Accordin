import React, { useState } from "react"
import * as C from './styles.js'
import data from './data/data'
import SingleQuestion from './components/Question'


function App() {
  // eslint-disable-next-line
  const [questions, setQuestions] = useState(data)

  return (
    <C.Main>
      <C.Container>
        <h3>questions and answers about login</h3>
        <C.SectionInfo>
        {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            )
        })}
        </C.SectionInfo>
      </C.Container>
    </C.Main>
  )
}

export default App
