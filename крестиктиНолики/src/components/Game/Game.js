import React, { Component } from 'react';
import './Game.css';
import {Board} from '../Board/Board';
export const Game=()=> {
    
      return (
        <div className="game">
          <div className="game-board">
          <Board/>
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    
  }