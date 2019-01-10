import React, { Component } from 'react';
import './generateEmoji.scss';

const emoji = require('emoji.json');

const fontSize = {
    fontSize:"70px"
  };

class GenerateEmoji extends Component {
    constructor() {
        super();
        this.state = {
          emoji: ''
        };
      }

      componentDidMount() {
          this.setState({
              emoji: this.getEmoji(this.getRandomNumber(0, emoji.length))
          })
      }
    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    /**
     * Returns an emoji based on provided index
     */    
    getEmoji = (index) => {
        return emoji[index].char;
    }

    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    updateState = () => {
        const newEmoji = this.getEmoji(this.getRandomNumber(0, emoji.length));
        this.setState({
            emoji: newEmoji
        })
    }

    render() {
        return (
            <span className='item noselect' style={fontSize} onClick={this.updateState} >{this.state.emoji}</span>
        )
    }
}

export default GenerateEmoji;
