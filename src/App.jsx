import { Fragment } from 'react'
import Header from './Components/header'
import Navigation from './Components/navigation'
import Question from './Components/question'
import FAQ from './Components/faq'

function App() {

  return (
    <Fragment>
      <Header/>
      <Navigation/>
      <Question/>
      <FAQ/>
    </Fragment>
  )
}

export default App
