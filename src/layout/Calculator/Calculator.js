import React, { Component } from 'react'

import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

//declare a function to return an area for our main content
class Calculator extends React.Component {
    state = {
        equation: '',
        result: 0
      }

    render() {
      return ( 
        <main className="calculator">
            <Screen equation={this.state.equation} result={this.state.result} />
            <Keypad />

        </main>
        );
    }
}



export default Calculator;
