import React from 'react';
import './App.css';
import Button from './Button';
import EventBtn from './EventBtn';
import Footer from './Footer';
import Input from './Input';
import OldClass from './OldClass';

function App() {
  return (
    <div className="App">
      <h1>Yo</h1>
      <OldClass something="some text for class"/>
      <Input/>
      <Button onClick={(text) =>console.log(text)}/>
      <EventBtn onClick={(e) => console.log(e)}/>
      <Footer text={"this is the footer"} />
    </div>
  );
}

export default App;
