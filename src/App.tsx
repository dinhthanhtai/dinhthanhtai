import React from 'react';
import BubbleCursor from "./components/BubbleCursor";
import Header from "./components/header";
import Main from "./components/main";
import Progress from './components/progress';

function App() {
  return (
    <React.Fragment>
      <BubbleCursor></BubbleCursor>
      <Progress />
      <Header/>
      <Main/>
    </React.Fragment>
  )
}

export default App
