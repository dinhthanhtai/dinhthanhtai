import React from 'react';
import Header from "./components/header"
import Main from "./components/main"
import Progress from './components/progress';

function App() {
  return (
    <React.Fragment>
      <Progress />
      <Header/>
      <Main/>
    </React.Fragment>
  )
}

export default App
