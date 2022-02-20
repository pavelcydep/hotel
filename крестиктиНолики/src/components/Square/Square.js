import React, { Component } from 'react';
import './Square.css';
export const Square=(props)=> {


    const [state,setState] = React.useState({value: null});
   
      return (
        <button className="square"
         
        onClick={() => setState({value: 'X'})}
      >
        {state.value}
        </button>
      );
    
  }