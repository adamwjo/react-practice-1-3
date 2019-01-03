import React from 'react';

//**********components******************
import Titles from './components/titles'
import Form from './components/form'

export default class App extends React.Component {
  render() {
    return(
      <div>
        Hello!
        <Titles/> 
        <Form/>
      </div>
    )
  }
}