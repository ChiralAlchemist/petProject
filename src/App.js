import React, { Component } from 'react';
import {createStore} from 'redux';
import deepFreeze from 'deep-freeze'; 
import expect from 'expect';


const makeEmptyBoard =  function (size) {
    var emptyBoard = [];
    for(let width = 0; width < size; width++) {
        let row = [];
        for(let height = 0; height < size; height++) {
            row.push(0);
        }
        emptyBoard.push(row);
    }
    return emptyBoard;
} 

const setPiece = (state, coordinates) =>  {
    return [
        ...state.slice(0,coordinates.x),
        state[coordinates.x],//...state[coordinates.y], 
        ...state.slice(coordinates.x+1)    
    ]
}

const reducer = (state = makeEmptyBoard(5), action) => {
    var actionsThatCanBePerformed = {
        
    }
    return actionsThatCanBePerformed[action.type]();
}

const testApp = () =>  {
    const startState = makeEmptyBoard(5);
    const nextState = makeEmptyBoard(5);
    
    deepFreeze(startState);
    expect(
        setPiece(startState,{x : 3})
    ).toEqual(nextState);
}

testApp();

console.log('It works');

export default class App extends Component {
  render() {
    return (
        <div>
            <h1>Hello, world.</h1>
            {/*<Grid board={board}/>*/}
        </div>
    );
  }
}
